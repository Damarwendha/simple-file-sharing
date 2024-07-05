import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { brand } from '../../../constants/brand';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../shared/services/scroll.service';

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

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.getScrollPosition().subscribe((position) => {
      this.isNotOnTop = position > 0;
    });
  }
}
