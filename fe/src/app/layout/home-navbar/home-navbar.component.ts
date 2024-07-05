import { isPlatformBrowser, NgFor, NgOptimizedImage } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { brand } from '../../../constants/brand';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgFor,
    MatIconModule,
  ],
  templateUrl: './home-navbar.component.html',
})
export class HomeNavbarComponent implements OnInit {
  isClient = false;
  isNotOnTop = false;
  brand = brand;
  routes = [
    {
      href: '/highest-earnings',
      label: 'Best Members',
    },
    {
      href: '/payout-rates',
      label: 'Payout Rates',
    },
  ] as const;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    this.isClient = isPlatformBrowser(this.platformId);

    if (this.isClient) this.checkScrollPosition();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isClient) this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    this.isNotOnTop = scrollPosition > 0;
  }
}
