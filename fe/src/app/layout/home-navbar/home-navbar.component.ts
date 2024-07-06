import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { brand } from '../../../constants/brand';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../shared/services/scroll.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    NgFor,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './home-navbar.component.html',
})
export class HomeNavbarComponent implements OnInit {
  public isNotOnTop = false;
  public readonly brand = brand;
  public readonly routes = [
    {
      href: '/highest-earnings',
      label: 'Best Members',
    },
    {
      href: '/payout-rates',
      label: 'Payout Rates',
    },
  ] as const;

  constructor(private readonly _scrollService: ScrollService) {}

  ngOnInit() {
    this._scrollService.watchScrollPosition().subscribe((position) => {
      this.isNotOnTop = position > 0;
    });
  }
}
