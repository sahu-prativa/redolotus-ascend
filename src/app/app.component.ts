import { Component, Inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { environment } from '../environments/environment';

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
    const baseUrl = environment.siteUrl;
    
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${baseUrl}#organization`,
          "name": "RedoLotus Ascend",
          "url": baseUrl,
          "logo": `${baseUrl}lotus.webp`,
          "sameAs": [
            "https://www.instagram.com/redolotus.ascend"
          ],
          "description": "RISE BEYOND ORDINARY"
        },
        {
          "@type": "WebSite",
          "@id": `${baseUrl}#website`,
          "url": baseUrl,
          "name": "RedoLotus Ascend",
          "publisher": {
            "@id": `${baseUrl}#organization`
          }
        }
      ]
    };
    
    script.text = JSON.stringify(jsonLd);
    this.document.head.appendChild(script);
  }
}
