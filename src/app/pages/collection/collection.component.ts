import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

interface PerfumeSize {
  ml: number | string;
  price: number;
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 350 },
        { ml: 30, price: 450 },
        { ml: 50, price: 700 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_08 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 350 },
        { ml: 30, price: 450 },
        { ml: 50, price: 700 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 350 },
        { ml: 30, price: 450 },
        { ml: 50, price: 700 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 350 },
        { ml: 30, price: 450 },
        { ml: 50, price: 700 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 279 },
        { ml: 30, price: 449 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 279 },
        { ml: 30, price: 449 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_08 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 279 },
        { ml: 30, price: 449 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 279 },
        { ml: 30, price: 449 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: 20, price: 279 },
        { ml: 30, price: 449 }
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
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: '2ml x 5 Vials', price: 169 }
      ],
      tags: ['Gift Sets', 'New Launch']
    },
    {
      id: 11,
      name: 'Travel Minis Combo',
      tagline: 'Mix and match your favorite 8ml travel perfumes.',
      category: 'Gift Sets',
      scentFamily: 'Gift Sets & Combos',
      image: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
      selectedSizeIndex: 0,
      quantity: 1,
      sizes: [
        { ml: '8ml x 2', price: 249 },
        { ml: '8ml x 3', price: 349 },
        { ml: '8ml x 5', price: 449 }
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
    if (perfume.id === 11) {
      // Travel Minis Combo selected!
      this.currentComboPerfume = perfume;
      const selectedSize = perfume.sizes[perfume.selectedSizeIndex].ml.toString();
      if (selectedSize.includes('2')) this.comboLimit = 2;
      else if (selectedSize.includes('3')) this.comboLimit = 3;
      else if (selectedSize.includes('5')) this.comboLimit = 5;
      
      this.selectedComboPerfumes = [];
      this.showComboModal = true;
    } else {
      // Normal WhatsApp Order logic
      const phoneNumber = '916302004167';
      const sizeObj = perfume.sizes[perfume.selectedSizeIndex];
      const mlSuffix = (sizeObj.ml.toString().includes('ml') || sizeObj.ml.toString().includes('Vials')) ? '' : 'ml';
      const total = sizeObj.price * perfume.quantity;
      
      const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order:\n*Product:* ${perfume.name}\n*Size:* ${sizeObj.ml}${mlSuffix}\n*Quantity:* ${perfume.quantity}\n*Total Price:* ₹${total}\n\n*(Shipping charges extra)*`;
      
      window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
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
    
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    this.showComboModal = false;
  }
}
