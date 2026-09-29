import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
      bg: 'assets/homescreen.png',
      productImg: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png',
      subtitle: 'THE SIGNATURE COLLECTION',
      title: 'Shrouded Smoke,\nTimeless Veil.',
      desc: 'A mysterious composition where luminous florals meet sacred incense and creamy woods.',
      cta: 'DISCOVER EMBER SHROUD',
      notes: ['Lily of the Valley', 'Frankincense', 'Sandalwood']
    },
    {
      bg: 'assets/rlaimg-header.png',
      productImg: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png',
      subtitle: 'OUR NEW LAUNCH',
      title: 'A Mysterious Blend,\nLet it Unfold.',
      desc: 'Fruity, floral, aquatic and softly musky — with a character that keeps you guessing.',
      cta: 'SHOP MAYA ASCEND',
      notes: ['Fruity', 'Floral', 'Aquatic']
    },
    {
      bg: 'assets/ChatGPT Image Jul 26, 2026, 06_23_53 PM.png',
      productImg: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png',
      subtitle: 'GIFT OF FRAGRANCE',
      title: 'The Perfect Perfume\nFor Every Occasion.',
      desc: 'Experience all 5 signature scents from Batch 2 with our exclusive Discovery Set.',
      cta: 'EXPLORE GIFT SETS',
      notes: ['2ml', '5 Vials', 'Signature']
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
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png', badge: 'Top Selling', name: 'Ember Shroud', rating: 5.0, reviews: 124, price: 350, comparePrice: 389 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_08 PM.png', badge: 'Top Selling', name: 'Moksha Noir', rating: 4.9, reviews: 89, price: 350, comparePrice: 389 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png', badge: 'Best Value', name: 'Marsh Glow', rating: 4.8, reviews: 76, price: 350, comparePrice: 389 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png', badge: 'Our Signature', name: 'Maya Ascend', rating: 5.0, reviews: 154, price: 279, comparePrice: 309 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png', badge: 'Our Signature', name: 'Maya Wave', rating: 4.9, reviews: 112, price: 350, comparePrice: 389 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png', badge: 'New Arrival', name: 'Velvet Noir', rating: 4.8, reviews: 65, price: 279, comparePrice: 309 }
  ];

  /* ========== BEST PARFUME CAROUSEL ========== */
  giftSets = [
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_08 PM.png', badge: 'New Launch', name: 'Midnight Soul', rating: 4.9, reviews: 76, price: 279, comparePrice: 309 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png', badge: 'New Launch', name: 'Dewlight', rating: 4.8, reviews: 54, price: 279, comparePrice: 309 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png', badge: 'New Launch', name: 'Sunlit Soul', rating: 4.7, reviews: 103, price: 279, comparePrice: 309 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png', badge: 'Save 10%', name: 'The Discovery Set (5x2ml)', rating: 5.0, reviews: 210, price: 169, comparePrice: 189 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_50 PM.png', badge: 'Save 11%', name: 'Travel Minis Combo (2x8ml)', rating: 4.9, reviews: 145, price: 249, comparePrice: 279 }
  ];

  /* ========== STICKY SHOP STRIP ========== */
  stripProducts = [
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png', name: 'Ember Shroud', price: 350 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_08 PM.png', name: 'Moksha Noir', price: 350 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png', name: 'Maya Ascend', price: 279 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_24 PM.png', name: 'Maya Wave', price: 350 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_13 PM.png', name: 'The Discovery Set', price: 169 },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_23_59 PM.png', name: 'Velvet Noir', price: 279 }
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
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_23_53 PM.png', title: 'WOODY & OUD', subtitle: 'sandalwood · oud · musk', link: '/collection?filter=Woody' },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_50 PM.png', title: 'FLORAL & SOFT', subtitle: 'rose · jasmine · lily', link: '/collection?filter=Floral' },
    { img: 'assets/homescreen.png', title: 'SWEET & WARM', subtitle: 'marshmallow · vanilla · amber', link: '/collection?filter=Sweet' },
    { img: 'assets/ChatGPT Image Jul 26, 2026, 06_24_41 PM.png', title: 'FRESH & AQUATIC', subtitle: 'bergamot · sea salt · citrus', link: '/collection?filter=Fresh' }
  ];

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

  /* ========== LIFECYCLE ========== */
  ngOnInit(): void {
    this.heroInterval = setInterval(() => this.nextHeroSlide(), 5000);

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
  }

  /* ========== HERO CAROUSEL CONTROLS ========== */
  goToSlide(index: number): void {
    if (index === this.currentHeroSlide) { return; }
    this.heroFading = true;
    if (this.heroInterval) { clearInterval(this.heroInterval); }
    setTimeout(() => {
      this.currentHeroSlide = index;
      this.heroFading = false;
      this.heroInterval = setInterval(() => this.nextHeroSlide(), 5000);
    }, 350);
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
}
