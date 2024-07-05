import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { brand } from '../../../constants/brand';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { radixHamburgerMenu } from '@ng-icons/radix-icons';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgFor,
    NgIconComponent,
  ],
  templateUrl: './home-navbar.component.html',
  viewProviders: [provideIcons({ radixHamburgerMenu })],
})
export class HomeNavbarComponent {
  brand = brand;
  isNotOnTop: boolean = true;
  pathname: string = '/highest-earnings';
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
}
