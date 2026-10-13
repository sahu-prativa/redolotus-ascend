import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {

  /* ========== HERO CAROUSEL ========== */
  heroSlides = [
    {
      bg: '',
      theme: 'wine',
      productImg: 'assets/Catlog_imgs/maya_ascend_20ml.png',
      posterImg: 'assets/hero_banner_1.png',
      alt: 'Maya Ascend — Luxury Fragrance',
      subtitle: 'OUR NEW LAUNCH',
      title: 'A Mysterious Blend,\nLet it Unfold.',
      desc: 'Fruity, floral, aquatic and softly musky — with a secret formula that keeps you guessing.',
      cta: 'SHOP MAYA ASCEND',
      badge: 'Secret Formula',
      notes: ['Fruity', 'Floral', 'Aquatic']
    },
    {
      bg: '',
      theme: 'amber',
      productImg: 'assets/Catlog_imgs/Ember_Shroud_20ml.png',
      posterImg: 'assets/hero_banner_2.png',
      alt: 'Ember Shroud — Signature Collection',
      subtitle: 'THE SIGNATURE COLLECTION',
      title: 'Shrouded Smoke,\nTimeless Veil.',
      desc: 'A mysterious composition where luminous florals meet sacred incense and creamy woods.',
      cta: 'DISCOVER EMBER SHROUD',
      badge: 'Signature Scent',
      notes: ['Lily of the Valley', 'Frankincense', 'Sandalwood']
    },
    {
      bg: '',
      theme: 'gold',
      productImg: 'assets/Catlog_imgs/2ml_combo.png',
      posterImg: 'assets/hero_banner_3.png',
      alt: 'The Discovery Set — Gift of Fragrance',
      subtitle: 'GIFT OF FRAGRANCE',
      title: 'The Perfect Discovery\nFor Every Mood.',
      desc: 'Experience all 5 signature scents from Batch 2 with our exclusive Discovery Set.',
      cta: 'EXPLORE GIFT SETS',
      badge: 'Discovery Set',
      notes: ['2ml', '5 Vials', 'Artisanal']
    },
    {
      bg: '',
      theme: 'green',
      productImg: 'assets/Catlog_imgs/Dewlight_20ml.png',
      posterImg: 'assets/hero_banner_4.png',
      alt: 'Dewlight — Fresh Botanical',
      subtitle: 'FRESH & BOTANICAL',
      title: 'Nature\'s Finest,\nBottled for You.',
      desc: 'A fresh, green, and luminous fragrance inspired by morning dew and blooming earth.',
      cta: 'SHOP DEWLIGHT',
      badge: 'Fresh Arrival',
      notes: ['Bergamot', 'Green', 'Dewy']
    }
  ];
  currentHeroSlide = 0;
  heroFading = false;
  private heroInterval: any;
  private heroTouchStartX = 0;

  /* ========== BRAND STATS ========== */
  brandStats = [
    { value: '100%', label: 'Pure Ingredients' },
    { value: '1K+', label: 'Happy Customers' },
    { value: '9', label: 'Exclusive Fragrances' },
    { value: '4.9★', label: 'Average Rating' }
  ];

  /* ========== EXPLORE PRODUCT CAROUSEL ========== */
  exploreProducts = [
    { img: 'assets/Catlog_imgs/Ember_Shroud_20ml.png', badge: 'Top Selling', name: 'Ember Shroud', rating: 5.0, reviews: 124, price: 350, comparePrice: 389 },
    { img: 'assets/Catlog_imgs/Moksha_Noir_20ml.png', badge: 'Top Selling', name: 'Moksha Noir', rating: 4.9, reviews: 89, price: 350, comparePrice: 389 },
    { img: 'assets/Catlog_imgs/Marsh_Glow_20ml.png', badge: 'Best Value', name: 'Marsh Glow', rating: 4.8, reviews: 76, price: 350, comparePrice: 389 },
    { img: 'assets/Catlog_imgs/maya_ascend_20ml.png', badge: 'Our Signature', name: 'Maya Ascend', rating: 5.0, reviews: 154, price: 279, comparePrice: 309 },
    { img: 'assets/Catlog_imgs/Maya_Wave_20ml.png', badge: 'Our Signature', name: 'Maya Wave', rating: 4.9, reviews: 112, price: 350, comparePrice: 389 },
    { img: 'assets/Catlog_imgs/Velvet_noir_20ml.png', badge: 'New Arrival', name: 'Velvet Noir', rating: 4.8, reviews: 65, price: 279, comparePrice: 309 }
  ];

  /* ========== BEST PARFUME CAROUSEL ========== */
  giftSets = [
    { img: 'assets/Catlog_imgs/midnight_soul_20ml.png', badge: 'New Launch', name: 'Midnight Soul', rating: 4.9, reviews: 76, price: 279, comparePrice: 309 },
    { img: 'assets/Catlog_imgs/Dewlight_20ml.png', badge: 'New Launch', name: 'Dewlight', rating: 4.8, reviews: 54, price: 279, comparePrice: 309 },
    { img: 'assets/Catlog_imgs/sunlit_soul_20ml.png', badge: 'New Launch', name: 'Sunlit Soul', rating: 4.7, reviews: 103, price: 279, comparePrice: 309 },
    { img: 'assets/Catlog_imgs/2ml_combo.png', badge: 'Save 10%', name: 'The Discovery Set (5x2ml)', rating: 5.0, reviews: 210, price: 169, comparePrice: 189 },
    { img: 'assets/Catlog_imgs/8mlx2_combo.png', badge: 'Save 11%', name: 'Travel Minis Combo (2x8ml)', rating: 4.9, reviews: 145, price: 249, comparePrice: 279 }
  ];

  /* ========== STICKY SHOP STRIP ========== */
  stripProducts = [
    { img: 'assets/Catlog_imgs/Ember_Shroud_20ml.png', name: 'Ember Shroud', price: 350 },
    { img: 'assets/Catlog_imgs/Moksha_Noir_20ml.png', name: 'Moksha Noir', price: 350 },
    { img: 'assets/Catlog_imgs/maya_ascend_20ml.png', name: 'Maya Ascend', price: 279 },
    { img: 'assets/Catlog_imgs/Maya_Wave_20ml.png', name: 'Maya Wave', price: 350 },
    { img: 'assets/Catlog_imgs/2ml_combo.png', name: 'The Discovery Set', price: 169 },
    { img: 'assets/Catlog_imgs/Velvet_noir_20ml.png', name: 'Velvet Noir', price: 279 }
  ];
  stripVisible = false;
  private lastScrollY = 0;

  /* ========== TESTIMONIALS ========== */
  testimonials = [
    { name: 'Anjali Sharma', product: 'Moksha Noir', rating: 5, review: 'Bohot hi pyari khushbu hai! It smells so premium and lasts the entire day at the office. Everyone kept asking me what I was wearing.' },
    { name: 'Rahul Verma', product: 'Ember Shroud', rating: 5, review: 'Bhai, if you like smoky and woody vibes, just go for this. It feels like a high-end designer perfume but at such a great price.' },
    { name: 'Sneha Reddy', product: 'Maya Ascend', rating: 5, review: 'I bought this because of the "secret formula" hype, and oh my god, I am obsessed! It’s fresh, slightly fruity, and just perfect.' },
    { name: 'Aman Desai', product: 'The Discovery Set', rating: 5, review: 'Best purchase ever! Gifted the 5-vial set to my sister on her birthday and she loved trying all the different scents.' },
    { name: 'Riya Kapoor', product: 'Dewlight', rating: 5, review: 'If you love fresh, ocean-like vibes, this is the one. So light, clean, and refreshing. Really lifts up the mood.' },
    { name: 'Vikram Singh', product: 'Velvet Noir', rating: 5, review: 'Ekdum rich aur mature fragrance hai. It’s perfect for evening parties or dinner dates. Very sophisticated and long-lasting.' },
    { name: 'Pooja Joshi', product: 'Marsh Glow', rating: 5, review: 'So sweet and cozy! The vanilla notes are literally addictive. Mere kapdon par agle din tak iski mehek aati hai.' },
    { name: 'Karan Patel', product: 'Maya Wave', rating: 5, review: 'Super fresh and aquatic. Reminds me of a beach vacation. Plus, the packaging and bottle quality is really nice for the price.' },
    { name: 'Neha Gupta', product: 'Sunlit Soul', rating: 5, review: 'Bought this on a friend’s recommendation. It is bright, fruity, and instantly lifts up your mood. Love the quality!' },
    { name: 'Siddharth Rao', product: 'Midnight Soul', rating: 5, review: 'Oud aur amber ka kya mast combination hai. It feels very royal and lasts for a solid 8-10 hours easily. Highly recommended.' }
  ];
  currentTestimonial = 0;
  testimonialFading = false;
  private testimonialInterval: any;

  /* ========== SCENT FAMILIES ========== */
  scentFamilies = [
    {
      title: 'WOODY & OUD',
      subtitle: 'sandalwood · oud · musk',
      link: '/collection?filter=Woody',
      activeImgIndex: 0,
      slides: [
        {
          img: 'assets/Catlog_imgs/midnight_soul_30ml.png',
          name: 'Midnight Soul',
          isCatalog: true
        },
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png',
          name: 'Ember Shroud',
          isCatalog: false
        },
        {
          img: 'assets/Catlog_imgs/Velvet_noir_30ml.png',
          name: 'Velvet Noir',
          isCatalog: true
        }
      ]
    },
    {
      title: 'FLORAL & SOFT',
      subtitle: 'rose · jasmine · lily',
      link: '/collection?filter=Floral',
      activeImgIndex: 0,
      slides: [
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_50 PM.png',
          name: 'Moksha Noir',
          isCatalog: false
        },
        {
          img: 'assets/Catlog_imgs/maya_ascend_30ml.png',
          name: 'Maya Ascend',
          isCatalog: true
        },
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_25_05 PM.png',
          name: 'Moksha Noir',
          isCatalog: false
        }
      ]
    },
    {
      title: 'SWEET & WARM',
      subtitle: 'marshmallow · vanilla · amber',
      link: '/collection?filter=Sweet',
      activeImgIndex: 0,
      slides: [
        {
          img: 'assets/Catlog_imgs/sunlit_soul_30ml.png',
          name: 'Sunlit Soul',
          isCatalog: true
        },
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
          name: 'Marsh Glow',
          isCatalog: false
        },
        {
          img: 'assets/Catlog_imgs/Marsh_Glow_30ml.png',
          name: 'Marsh Glow',
          isCatalog: true
        }
      ]
    },
    {
      title: 'FRESH & AQUATIC',
      subtitle: 'bergamot · sea salt · citrus',
      link: '/collection?filter=Fresh',
      activeImgIndex: 0,
      slides: [
        {
          img: 'assets/Catlog_imgs/Dewlight_30ml.png',
          name: 'Dewlight',
          isCatalog: true
        },
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_41 PM.png',
          name: 'Maya Wave',
          isCatalog: false
        },
        {
          img: 'assets/ChatGPT Image Jul 26, 2026, 06_25_13 PM.png',
          name: 'Maya Wave',
          isCatalog: false
        }
      ]
    }
  ];
  private scentFamilyInterval: any;
  hoveredFamilyIndex: number | null = null;

  /* ========== MARQUEE TEXTS ========== */
  marqueeItems = [
    { name: 'LONG-LASTING SILLAGE' },
    { name: 'PREMIUM INGREDIENTS' },
    { name: 'CRAFTED IN SMALL BATCHES' },
    { name: 'CRUELTY-FREE' },
    { name: 'UNISEX FRAGRANCES' },
    { name: 'LUXURY PACKAGING' }
  ];

  /* ========== BLOG POSTS ========== */
  blogPosts = [
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_57 PM.png', title: 'The Art of Layering Fragrances', date: 'August 28, 2026', excerpt: 'Discover how to combine two or more scents to create your unique olfactory signature that lasts all day.' },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_25_05 PM.png', title: 'The Story Behind Every Scent: Our Perfume Making Process', date: 'August 15, 2026', excerpt: 'A deep dive into how we source the world\'s finest ingredients and craft each bottle by hand.' },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_25_13 PM.png', title: 'How to Make Your Perfume Last All Day', date: 'August 5, 2026', excerpt: 'Simple tips and tricks to extend the life of your fragrance from morning to midnight.' }
  ];

  /* ========== EXIT INTENT POPUP ========== */
  popupVisible = false;
  popupDismissed = false;
  private popupShown = false;

  /* ========== STAR HELPER ========== */
  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.round(rating)).fill(0);
  }

  getSavePct(price: number, compare: number): number {
    return Math.round(((compare - price) / compare) * 100);
  }

  setHoveredFamily(index: number | null): void {
    this.hoveredFamilyIndex = index;
  }

  constructor(private seoService: SeoService) {}

  /* ========== LIFECYCLE ========== */
  ngOnInit(): void {
    // Set SEO meta tags & canonical for homepage
    this.seoService.setPageSeo({
      title: 'RedoLotus Ascend | Luxury Artisanal Perfumes & Fragrances India',
      description: 'RedoLotus Ascend — luxury artisanal perfumes crafted in India. Explore distinctive scents, pure ingredients, and accessible luxury. Rise beyond ordinary.',
      canonicalPath: ''
    });

    // Start hero poster auto-slide (every 5 seconds)
    this.heroInterval = setInterval(() => this.nextHeroSlide(), 5000);

    // Scent family slow-motion slideshow (rotates every 4.2 seconds)
    this.scentFamilyInterval = setInterval(() => {
      this.scentFamilies.forEach((f, idx) => {
        if (this.hoveredFamilyIndex !== idx) {
          f.activeImgIndex = (f.activeImgIndex + 1) % f.slides.length;
        }
      });
    }, 4200);

    this.testimonialInterval = setInterval(() => {
      this.testimonialFading = true;
      setTimeout(() => {
        this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
        this.testimonialFading = false;
      }, 400);
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.heroInterval) { clearInterval(this.heroInterval); }
    if (this.testimonialInterval) { clearInterval(this.testimonialInterval); }
    if (this.scentFamilyInterval) { clearInterval(this.scentFamilyInterval); }
  }

  /* ========== HERO CAROUSEL CONTROLS ========== */
  goToSlide(index: number): void {
    if (index === this.currentHeroSlide) { return; }
    // CSS transform transition handles the animation — no JS fade needed
    if (this.heroInterval) { clearInterval(this.heroInterval); }
    this.currentHeroSlide = index;
    this.heroFading = false; // keep for old commented section compatibility
    this.heroInterval = setInterval(() => this.nextHeroSlide(), 5000);
  }

  nextHeroSlide(): void {
    this.goToSlide((this.currentHeroSlide + 1) % this.heroSlides.length);
  }

  prevHeroSlide(): void {
    this.goToSlide((this.currentHeroSlide - 1 + this.heroSlides.length) % this.heroSlides.length);
  }

  onHeroTouchStart(e: TouchEvent): void {
    this.heroTouchStartX = e.touches[0].clientX;
  }

  onHeroTouchEnd(e: TouchEvent): void {
    const dx = e.changedTouches[0].clientX - this.heroTouchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) { this.nextHeroSlide(); } else { this.prevHeroSlide(); }
    }
  }

  /* ========== SCROLL HANDLER ========== */
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? scrollY / docHeight : 0;

    this.stripVisible = pct > 0.30;

    if (pct > 0.60 && !this.popupShown && !this.popupDismissed) {
      this.popupShown = true;
      setTimeout(() => { this.popupVisible = true; }, 600);
    }

    this.lastScrollY = scrollY;
  }

  /* ========== EXIT INTENT ========== */
  @HostListener('document:mouseleave', ['$event'])
  onMouseLeave(e: MouseEvent): void {
    if (e.clientY <= 0 && !this.popupShown && !this.popupDismissed) {
      this.popupShown = true;
      this.popupVisible = true;
    }
  }

  dismissPopup(): void {
    this.popupVisible = false;
    this.popupDismissed = true;
  }

  /* ========== TESTIMONIALS CONTROLS ========== */
  goToTestimonial(index: number): void {
    if (index === this.currentTestimonial) { return; }
    this.testimonialFading = true;
    if (this.testimonialInterval) { clearInterval(this.testimonialInterval); }
    setTimeout(() => {
      this.currentTestimonial = index;
      this.testimonialFading = false;
      this.testimonialInterval = setInterval(() => {
        this.testimonialFading = true;
        setTimeout(() => {
          this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
          this.testimonialFading = false;
        }, 400);
      }, 5000);
    }, 400);
  }

  /* ========== QUICK ADD VIA WHATSAPP ========== */
  handleQuickAdd(product: any): void {
    const phoneNumber = '916302004167';
    
    const message = `Hello Redolotus Ascend! 🌸\n\nI would like to order:\n*Product:* ${product.name}\n*Quantity:* 1\n*Total Price:* ₹${product.price}\n\n*(Shipping charges extra)*`;
    
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  }
}
