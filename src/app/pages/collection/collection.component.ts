import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface PerfumeSize {
  ml: number | string;
  price: number;
  image?: string;
}

interface Perfume {
  id: number;
  name: string;
  tagline: string;
  category: string;
  scentFamily: string;
  image: string;
  sizes: PerfumeSize[];
  selectedSizeIndex: number;
  quantity: number;
  tags: string[];
  description?: string;
  notesHtml?: string;
  perfectFor?: string;
}

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit {
  activeFilter = 'All Scents';

  constructor(
    private route: ActivatedRoute,
    private seoService: SeoService
  ) {}

  ngOnInit() {
    // Set SEO meta tags & canonical for collection page
    this.seoService.setPageSeo({
      title: 'Our Perfume Collection | RedoLotus Ascend — Shop All Fragrances',
      description: 'Browse the complete RedoLotus Ascend perfume collection. Discover luxury artisanal fragrances — from woody & oud to floral, fresh, and sweet scents. Shop now.',
      canonicalPath: 'collection'
    });

    this.route.queryParams.subscribe(params => {
      if (params['filter']) {
        this.activeFilter = params['filter'];
      }
    });
  }

  perfumes: Perfume[] = [
    {
      id: 1,
      name: 'Ember Shroud',
      tagline: 'Shrouded Smoke, Timeless Veil.',
      category: 'Signature Collection',
      scentFamily: 'Woody & Oud',
      image: 'assets/Catlog_imgs/Ember_Shroud_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Ember_Shroud_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Ember_Shroud_30ml.png' },
        { ml: 50, price: 700, image: 'assets/Catlog_imgs/Ember_Shroud_30ml.png' }
      ],
      tags: ['Best Sellers', 'Woody'],
      description: 'A mysterious composition where luminous florals meet sacred incense and creamy woods. Ember Shroud unfolds like a veil of smoke—quietly powerful and deeply refined.',
      notesHtml: '🌸 Lily of the Valley • Rose • Aldehydes<br>🪵 Frankincense • Mystical Incense Accord<br>🤍 Sandalwood • Benzoin • White Musk • Ambergris',
      perfectFor: 'Unisex • Evening wear • Those who appreciate timeless elegance'
    },
    {
      id: 2,
      name: 'Moksha Noir',
      tagline: 'Lavender Flames of Freedom.',
      category: 'Signature Collection',
      scentFamily: 'Floral',
      image: 'assets/Catlog_imgs/Moksha_Noir_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Moksha_Noir_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Moksha_Noir_30ml.png' },
        { ml: 50, price: 700, image: 'assets/Catlog_imgs/Moksha_Noir_30ml.png' }
      ],
      tags: ['Floral'],
      description: 'Bold yet effortlessly elegant, Moksha Noir is a celebration of confidence and liberation. Sparkling citrus and aromatic lavender open into a radiant bouquet of white florals.',
      notesHtml: '🍊 Mandarin Orange • 💜 Lavender • 🫐 Blackcurrant<br>🌸 Orange Blossom • Jasmine<br>🍦 Madagascar Vanilla • 🪵 Cedarwood • 🤍 White Musk',
      perfectFor: 'Unisex • Everyday luxury • Office wear & brunches'
    },
    {
      id: 3,
      name: 'Marsh Glow',
      tagline: 'Gooey Glow Over Smoky Depths.',
      category: 'Signature Collection',
      scentFamily: 'Sweet & Warm',
      image: 'assets/Catlog_imgs/Marsh_Glow_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Marsh_Glow_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Marsh_Glow_30ml.png' },
        { ml: 50, price: 700, image: 'assets/Catlog_imgs/Marsh_Glow_30ml.png' }
      ],
      tags: ['Best Sellers', 'Sweet'],
      description: 'Indulgent yet sophisticated, Marsh Glow wraps the senses in a delicious blend of creamy sweetness and smoky woods. Comforting, addictive, and effortlessly elegant.',
      notesHtml: '🍓 Strawberry • 🌸 Freesia • 🍒 Red Berries<br>☁️ Marshmallow • 🥥 Coconut • 🍦 Whipped Cream<br>🪵 Oud • Vanilla • 🤍 White Musk • Sandalwood',
      perfectFor: 'Unisex • Date nights • Cool weather & festive occasions'
    },
    {
      id: 4,
      name: 'Maya Wave',
      tagline: 'Our Secret Formula • Let the mystery unfold.',
      category: 'Signature Collection',
      scentFamily: 'Fresh',
      image: 'assets/Catlog_imgs/Maya_Wave_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Maya_Wave_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Maya_Wave_30ml.png' },
        { ml: 50, price: 700, image: 'assets/Catlog_imgs/Maya_Wave_30ml.png' }
      ],
      tags: ['Fresh', 'Our Signature'],
      description: 'Refreshing like the first ocean breeze at sunrise, Maya Wave blends sparkling citrus and juicy fruits with delicate lotus and white florals.',
      notesHtml: '🍑 Fruity • 🌸 Floral • 💧 Aquatic • 🤍 Musky<br><br>🎲 <strong>Can you guess the notes?</strong><br><span style="color: #666;"><em>We kept the exact formula a secret to let your senses play a fun guessing game! Try it, trust your nose, and let us know what you smell.</em> 😉</span>',
      perfectFor: 'Unisex • Everyday wear • Those who love something different'
    },
    {
      id: 5,
      name: 'Maya Ascend',
      tagline: 'Our Secret Formula • A mysterious blend.',
      category: 'Discovery Collection',
      scentFamily: 'Floral',
      image: 'assets/Catlog_imgs/maya_ascend_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/maya_ascend_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/maya_ascend_30ml.png' }
      ],
      tags: ['Floral', 'New Launch', 'Our Signature'],
      description: 'A mysterious fragrance created to be discovered, not explained. Fruity, floral, aquatic and softly musky — with a character that keeps you guessing.',
      notesHtml: '🍑 Fruity • 🌸 Floral • 💧 Aquatic • 🤍 Musky<br><br>🎲 <strong>Can you guess the notes?</strong><br><span style="color: #666;"><em>We kept the exact formula a secret to let your senses play a fun guessing game! Try it, trust your nose, and let us know what you smell.</em> 😉</span>',
      perfectFor: 'Unisex • Everyday wear • Those who love something different'
    },
    {
      id: 6,
      name: 'Velvet Noir',
      tagline: 'Intimate • Mature • Elegant',
      category: 'Discovery Collection',
      scentFamily: 'Woody & Oud',
      image: 'assets/Catlog_imgs/Velvet_noir_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Velvet_noir_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Velvet_noir_30ml.png' }
      ],
      tags: ['Best Sellers', 'Woody', 'New Launch'],
      description: 'A warm, woody and creamy blend that is rich, powdery, and highly sophisticated. Perfect for leaving a mature and elegant impression.',
      notesHtml: '🍋 Bergamot • 🥃 Whisky Absolute<br>🌰 Chestnut • 🌸 Orris • 🟤 Benzoin<br>🪵 Cedarwood • 🌿 Vetiver • 🌿 Patchouli',
      perfectFor: 'Unisex • Intimate settings • Mature & luxurious vibe'
    },
    {
      id: 7,
      name: 'Midnight Soul',
      tagline: 'Mysterious • Warm • Regal',
      category: 'Discovery Collection',
      scentFamily: 'Woody & Oud',
      image: 'assets/Catlog_imgs/midnight_soul_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/midnight_soul_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/midnight_soul_30ml.png' }
      ],
      tags: ['Woody', 'New Launch'],
      description: 'A regal and mysterious fragrance that combines spicy amber with floral resins, settling into a majestic oud and woody base.',
      notesHtml: '🌶️ Amber • ✨ Spicy Accords<br>🌸 Floral Notes • 🧡 Resinous Notes<br>🪵 Oud • 🤍 Musk • 🌲 Woody Notes',
      perfectFor: 'Unisex • Evening & special occasions • Regal & mysterious vibe'
    },
    {
      id: 8,
      name: 'Dewlight',
      tagline: 'Fresh • Aquatic • Clean',
      category: 'Discovery Collection',
      scentFamily: 'Fresh',
      image: 'assets/Catlog_imgs/Dewlight_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/Dewlight_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/Dewlight_30ml.png' }
      ],
      tags: ['Fresh', 'New Launch'],
      description: 'A refreshing aquatic fragrance with a bright citrus opening and a soft, clean finish.',
      notesHtml: '🍋 Ginger • Bergamot • Tangerine<br>🍵 Green Tea • Neroli<br>🤍 Musk • Woody • Amber',
      perfectFor: 'Unisex • Everyday wear • Fresh fragrance lovers'
    },
    {
      id: 9,
      name: 'Sunlit Soul',
      tagline: 'Fresh • Fruity • Aquatic',
      category: 'Discovery Collection',
      scentFamily: 'Fresh',
      image: 'assets/Catlog_imgs/sunlit_soul_20ml.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 250, image: 'assets/Catlog_imgs/sunlit_soul_20ml.png' },
        { ml: 30, price: 400, image: 'assets/Catlog_imgs/sunlit_soul_30ml.png' }
      ],
      tags: ['Best Sellers', 'Fresh', 'New Launch'],
      description: 'A bright and captivating fragrance that brings together fresh fruity apples, citrus, and a subtle hint of spicy cinnamon over a watery, musky base.',
      notesHtml: '🍏 Apple • 🍋 Bergamot & Lemon • 🌶️ Cinnamon<br>💧 Watery Notes • 🍑 Plum • 🌸 Orange Blossom • 🌿 Cardamom<br>🧡 Ambergris • 🤍 Musk • 🌿 Patchouli • 🪵 Driftwood',
      perfectFor: 'Unisex • Everyday freshness • Casual outings & vacations'
    },
    {
      id: 10,
      name: 'The Discovery Set',
      tagline: 'Experience all 5 signature scents from Batch 2.',
      category: 'Gift Sets',
      scentFamily: 'Gift Sets & Combos',
      image: 'assets/Catlog_imgs/2ml_combo.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: '2ml x 5 Vials', price: 169, image: 'assets/Catlog_imgs/2ml_combo.png' }
      ],
      tags: ['Gift Sets', 'New Launch']
    },
    {
      id: 11,
      name: 'Travel Minis Combo',
      tagline: 'Mix and match your favorite 8ml travel perfumes.',
      category: 'Gift Sets',
      scentFamily: 'Gift Sets & Combos',
      image: 'assets/Catlog_imgs/8mlx2_combo.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: '8ml x 2', price: 249, image: 'assets/Catlog_imgs/8mlx2_combo.png' },
        { ml: '8ml x 3', price: 349, image: 'assets/Catlog_imgs/8mlx3_combo.png' },
        { ml: '8ml x 5', price: 449, image: 'assets/Catlog_imgs/8mlx5_combo.png' }
      ],
      tags: ['Gift Sets', 'New Launch']
    }
  ];

  // Modal State
  showComboModal = false;
  comboLimit = 0;
  selectedComboPerfumes: string[] = [];
  currentComboPerfume: Perfume | null = null;
  
  // Available fragrances for the combo
  batch2Scents = [
    { name: 'Maya Ascend', notes: 'Secret Formula • Mystery' },
    { name: 'Velvet Noir', notes: 'Warm • Woody' },
    { name: 'Midnight Soul', notes: 'Warm • Spicy' },
    { name: 'Dewlight', notes: 'Fresh • Citrus' },
    { name: 'Sunlit Soul', notes: 'Fresh • Aquatic' }
  ];

  // Quick View Modal State
  showQuickView = false;
  selectedPerfumeForView: Perfume | null = null;

  openQuickView(perfume: Perfume) {
    if (perfume.id === 10 || perfume.id === 11) return; // Skip combos for now, or handle differently
    this.selectedPerfumeForView = perfume;
    if (perfume.sizes[perfume.selectedSizeIndex]?.image) {
      perfume.image = perfume.sizes[perfume.selectedSizeIndex].image!;
    }
    this.showQuickView = true;
  }

  closeQuickView() {
    this.showQuickView = false;
    this.selectedPerfumeForView = null;
  }

  get filteredPerfumes() {
    if (this.activeFilter === 'All Scents') {
      return this.perfumes;
    }
    return this.perfumes.filter(p => p.tags.includes(this.activeFilter));
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  selectSize(perfume: Perfume, sizeIndex: number) {
    perfume.selectedSizeIndex = sizeIndex;
    if (perfume.sizes[sizeIndex]?.image) {
      perfume.image = perfume.sizes[sizeIndex].image!;
    }
  }

  increaseQuantity(perfume: Perfume) {
    perfume.quantity++;
  }

  decreaseQuantity(perfume: Perfume) {
    if (perfume.quantity > 1) {
      perfume.quantity--;
    }
  }

  handleAddToCart(perfume: Perfume) {
    const phoneNumber = '916302004167';
    
    if (perfume.id === 11) {
      // Travel Minis Combo selected!
      this.currentComboPerfume = perfume;
      const selectedSize = perfume.sizes[perfume.selectedSizeIndex].ml.toString();
      if (selectedSize.includes('2')) this.comboLimit = 2;
      else if (selectedSize.includes('3')) this.comboLimit = 3;
      else if (selectedSize.includes('5')) this.comboLimit = 5;
      
      this.selectedComboPerfumes = [];
      this.showComboModal = true;
    } else if (perfume.id === 10) {
      // The Discovery Set - explicitly list the 5 batch scents
      const sizeObj = perfume.sizes[perfume.selectedSizeIndex];
      const total = sizeObj.price * perfume.quantity;
      
      const batch2List = this.batch2Scents.map(s => s.name).join('\n- ');
      
      const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order:\n*Product:* ${perfume.name}\n*Size:* ${sizeObj.ml}\n*Quantity:* ${perfume.quantity}\n*Total Price:* ₹${total}\n\n*Included Scents:*\n- ${batch2List}\n\n*(Shipping charges extra)*`;
      
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    } else {
      // Normal WhatsApp Order logic
      const sizeObj = perfume.sizes[perfume.selectedSizeIndex];
      const mlSuffix = (sizeObj.ml.toString().includes('ml') || sizeObj.ml.toString().includes('Vials')) ? '' : 'ml';
      const total = sizeObj.price * perfume.quantity;
      
      const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order:\n*Product:* ${perfume.name}\n*Size:* ${sizeObj.ml}${mlSuffix}\n*Quantity:* ${perfume.quantity}\n*Total Price:* ₹${total}\n\n*(Shipping charges extra)*`;
      
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  toggleComboScent(scentName: string) {
    const index = this.selectedComboPerfumes.indexOf(scentName);
    if (index > -1) {
      this.selectedComboPerfumes.splice(index, 1); // Deselect
    } else {
      if (this.selectedComboPerfumes.length < this.comboLimit) {
        this.selectedComboPerfumes.push(scentName); // Select
      }
    }
  }

  confirmCombo() {
    if (this.selectedComboPerfumes.length !== this.comboLimit || !this.currentComboPerfume) return;
    
    const phoneNumber = '916302004167';
    const sizeObj = this.currentComboPerfume.sizes[this.currentComboPerfume.selectedSizeIndex];
    const total = sizeObj.price * this.currentComboPerfume.quantity;
    
    const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order a Custom Combo:\n*Product:* ${this.currentComboPerfume.name}\n*Package:* ${sizeObj.ml}\n*Quantity:* ${this.currentComboPerfume.quantity}\n*Total Price:* ₹${total}\n\n*My Selected Scents:*\n- ${this.selectedComboPerfumes.join('\n- ')}\n\n*(Shipping charges extra)*`;
    
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
    this.showComboModal = false;
  }
}
