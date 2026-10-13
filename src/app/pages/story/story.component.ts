import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent implements OnInit {
  expandedSections: { [key: string]: boolean } = {
    about: false,
    story: false,
    vision: false,
    philosophy: false,
    collection: false,
    promise: false,
    final: false
  };

  constructor(private seoService: SeoService) {}

  ngOnInit() {
    this.seoService.setPageSeo({
      title: 'Our Story | RedoLotus Ascend — The Journey Behind the Fragrance',
      description: 'Discover the story behind RedoLotus Ascend — how a passion for artisanal perfumery turned into India\'s emerging luxury fragrance brand. Rise beyond ordinary.',
      canonicalPath: 'story'
    });
  }

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}
