import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ProductService, Perfume } from '../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  product: Perfume | null = null;
  selectedSizeIndex = 0;
  quantity = 1;
  activeImageIndex = 0;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private seoService: SeoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      if (!slug) { this.notFound = true; return; }

      const found = this.productService.getBySlug(slug);
      if (!found) { this.notFound = true; return; }

      // Deep clone so we don't mutate the shared array
      this.product = { ...found, sizes: found.sizes.map(s => ({ ...s })) };
      this.selectedSizeIndex = 0;
      this.quantity = 1;

      this.seoService.setPageSeo({
        title: `${found.name} — ${found.tagline} | RedoLotus Ascend`,
        description: found.description ?? `Shop ${found.name} by RedoLotus Ascend. Luxury artisanal EDP perfume crafted in India.`,
        canonicalPath: `product/${slug}`
      });
    });
  }

  ngOnDestroy(): void {}

  get currentPrice(): number {
    return this.product ? this.product.sizes[this.selectedSizeIndex].price * this.quantity : 0;
  }

  get currentImage(): string {
    if (!this.product) return '';
    return this.product.sizes[this.selectedSizeIndex].image ?? this.product.image;
  }

  selectSize(index: number) {
    this.selectedSizeIndex = index;
  }

  increaseQty() { this.quantity++; }
  decreaseQty() { if (this.quantity > 1) this.quantity--; }

  handleBuyNow() {
    if (!this.product) return;
    const phone = '916302004167';
    const size = this.product.sizes[this.selectedSizeIndex];
    const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order:\n*Product:* ${this.product.name}\n*Size:* ${size.ml}${typeof size.ml === 'number' ? 'ml' : ''}\n*Quantity:* ${this.quantity}\n*Total Price:* ₹${this.currentPrice}\n\n*(Shipping charges extra)*`;
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`, '_blank');
  }

  goBack() {
    this.router.navigate(['/collection']);
  }

  get relatedProducts(): Perfume[] {
    if (!this.product) return [];
    return this.productService.getAll()
      .filter(p => p.id !== this.product!.id &&
        (p.scentFamily === this.product!.scentFamily || p.category === this.product!.category))
      .slice(0, 3);
  }
}
