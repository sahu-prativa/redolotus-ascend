import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setPageSeo({
      title: 'Contact Us | RedoLotus Ascend — Get in Touch',
      description: 'Have a question or need help with your order? Contact RedoLotus Ascend — we\'re here to help. Reach out via WhatsApp, email, or our contact form.',
      canonicalPath: 'contact'
    });
  }
}
