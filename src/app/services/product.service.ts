import { Injectable } from '@angular/core';

export interface PerfumeSize {
  ml: number | string;
  price: number;
  image?: string;
}

export interface Perfume {
  id: number;
  slug: string;
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

@Injectable({ providedIn: 'root' })
export class ProductService {

  readonly perfumes: Perfume[] = [
    {
      id: 1,
      slug: 'ember-shroud',
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
      slug: 'moksha-noir',
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
      slug: 'marsh-glow',
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
      slug: 'maya-wave',
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
      notesHtml: '🍑 Fruity • 🌸 Floral • 💧 Aquatic • 🤍 Musky<br><br>🎲 <strong>Can you guess the notes?</strong><br><span style="color: #aaa;"><em>We kept the exact formula a secret to let your senses play a fun guessing game! Try it, trust your nose, and let us know what you smell.</em> 😉</span>',
      perfectFor: 'Unisex • Everyday wear • Those who love something different'
    },
    {
      id: 5,
      slug: 'maya-ascend',
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
      notesHtml: '🍑 Fruity • 🌸 Floral • 💧 Aquatic • 🤍 Musky<br><br>🎲 <strong>Can you guess the notes?</strong><br><span style="color: #aaa;"><em>We kept the exact formula a secret to let your senses play a fun guessing game! Try it, trust your nose, and let us know what you smell.</em> 😉</span>',
      perfectFor: 'Unisex • Everyday wear • Those who love something different'
    },
    {
      id: 6,
      slug: 'velvet-noir',
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
      slug: 'midnight-soul',
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
      slug: 'dewlight',
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
      slug: 'sunlit-soul',
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
    }
  ];

  getBySlug(slug: string): Perfume | undefined {
    return this.perfumes.find(p => p.slug === slug);
  }

  getAll(): Perfume[] {
    return this.perfumes;
  }
}
