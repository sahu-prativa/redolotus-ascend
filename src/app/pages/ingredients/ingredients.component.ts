import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setPageSeo({
      title: 'Our Ingredients | RedoLotus Ascend — Pure & Premium Fragrance Notes',
      description: 'Explore the premium, pure ingredients behind every RedoLotus Ascend fragrance. From French lavender to Indian sandalwood — crafted with care.',
      canonicalPath: 'ingredients'
    });
  }
}
