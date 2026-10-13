import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private title: Title
  ) {}

  /**
   * Sets the canonical URL, page title, meta description, and OG tags.
   * Call this in ngOnInit() of each page component.
   */
  setPageSeo(config: {
    title: string;
    description: string;
    canonicalPath: string;   // e.g. '' | 'collection' | 'story'
    ogImage?: string;
  }): void {
    const baseUrl = 'https://redolotusascend.com';
    const fullUrl = `${baseUrl}${config.canonicalPath ? '/' + config.canonicalPath : '/'}`;
    const ogImage = config.ogImage ?? `${baseUrl}/assets/rlaimg.png`;

    // --- Page Title ---
    this.title.setTitle(config.title);

    // --- Meta Description ---
    this.meta.updateTag({ name: 'description', content: config.description });

    // --- Robots ---
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    // --- Canonical Tag ---
    this.setCanonical(fullUrl);

    // --- Open Graph ---
    this.meta.updateTag({ property: 'og:title',       content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:url',         content: fullUrl });
    this.meta.updateTag({ property: 'og:image',       content: ogImage });
    this.meta.updateTag({ property: 'og:type',        content: 'website' });

    // --- Twitter Card ---
    this.meta.updateTag({ name: 'twitter:title',       content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:url',         content: fullUrl });
    this.meta.updateTag({ name: 'twitter:image',       content: ogImage });
  }

  private setCanonical(url: string): void {
    // Remove any existing canonical tag
    const existing = this.document.querySelector('link[rel="canonical"]');
    if (existing) {
      existing.setAttribute('href', url);
    } else {
      const link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      this.document.head.appendChild(link);
    }
  }
}
