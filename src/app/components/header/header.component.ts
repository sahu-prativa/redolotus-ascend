import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  announcements = [
    '✦ Complimentary Surprise Tester on Orders Above ₹500 ✦',
    '✦ Buy Two 20ml/30ml Perfumes & Get a 10ml Free ✦',
    '✦ Up to 11% off on Gift Sets ✦'
  ];
  currentAnnouncement = 0;
  announcementFading = false;
  private announcementInterval: any;

  megaMenuOpen = false;
  private megaMenuTimeout: any;

  ngOnInit(): void {
    this.announcementInterval = setInterval(() => {
      this.announcementFading = true;
      setTimeout(() => {
        this.currentAnnouncement = (this.currentAnnouncement + 1) % this.announcements.length;
        this.announcementFading = false;
      }, 400);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.announcementInterval) clearInterval(this.announcementInterval);
    if (this.megaMenuTimeout) clearTimeout(this.megaMenuTimeout);
  }

  openMegaMenu(): void {
    if (this.megaMenuTimeout) clearTimeout(this.megaMenuTimeout);
    this.megaMenuOpen = true;
  }

  closeMegaMenuDelayed(): void {
    this.megaMenuTimeout = setTimeout(() => {
      this.megaMenuOpen = false;
    }, 200);
  }

  cancelCloseMegaMenu(): void {
    if (this.megaMenuTimeout) clearTimeout(this.megaMenuTimeout);
  }
}
