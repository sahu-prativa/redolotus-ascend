import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-return-policy',
  standalone: true,
  imports: [],
  templateUrl: './return-policy.component.html',
  styleUrl: './return-policy.component.scss'
})
export class ReturnPolicyComponent implements OnInit {

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setPageSeo({
      title: 'Return & Refund Policy | RedoLotus Ascend',
      description: 'Read the return and refund policy of RedoLotus Ascend. We accept returns only for wrong or damaged products delivered. No exchanges. Luxury artisanal perfumes India.',
      canonicalPath: 'return-policy'
    });
  }
}
