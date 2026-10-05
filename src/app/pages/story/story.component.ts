import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {
  expandedSections: { [key: string]: boolean } = {
    about: false,
    story: false,
    vision: false,
    philosophy: false,
    collection: false,
    promise: false,
    final: false
  };

  toggleSection(section: string) {
    this.expandedSections[section] = !this.expandedSections[section];
  }
}
