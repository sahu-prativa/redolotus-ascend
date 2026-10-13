import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'redolotus-app';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.addJsonLd();
  }

  private addJsonLd() {
    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'ld-org-website'; // ID for dedup prevention

    // Always use production URL for structured data — never localhost
    const baseUrl = 'https://redolotusascend.com';

    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          "name": "RedoLotus Ascend",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/lotus.webp`,
            "width": 512,
            "height": 512
          },
          "description": "India's artisanal EDP perfume brand crafting small-batch, long-lasting luxury fragrances with exceptional sillage. Rise beyond ordinary.",
          "foundingDate": "2026",
          "founder": {
            "@type": "Person",
            "name": "Ishita Sahu"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6302004167",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://www.instagram.com/redolotus.ascend",
            "https://www.facebook.com/redolotusascend",
            "https://www.youtube.com/@redolotus",
            "https://www.linkedin.com/in/ishita-sahu-593445413/",
            "https://wa.me/916302004167"
          ]
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          "url": baseUrl,
          "name": "RedoLotus Ascend",
          "description": "Shop luxury artisanal perfumes & long-lasting EDP fragrances crafted in India.",
          "publisher": {
            "@id": `${baseUrl}/#organization`
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `${baseUrl}/collection?filter={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          },
          "inLanguage": "en-IN"
        }
      ]
    };

    script.text = JSON.stringify(jsonLd);

    // Prevent duplicate injection (SPA navigations)
    if (!this.document.getElementById('ld-org-website')) {
      this.document.head.appendChild(script);
    }
  }
}
