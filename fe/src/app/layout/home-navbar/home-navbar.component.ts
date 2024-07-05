import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
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
