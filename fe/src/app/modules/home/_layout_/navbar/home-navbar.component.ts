import { NgFor, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';
import { brand } from '../../../../core/constants/brand';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ScrollService } from '../../../../shared/services/scroll.service';
import { MatMenuModule } from '@angular/material/menu';
import { Subscription } from 'rxjs';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeNavbarComponent implements OnInit, OnDestroy {
  public isNotOnTop = signal(false);
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

  private _scrollSub!: Subscription;

  constructor(private readonly _scrollService: ScrollService) {}

  ngOnInit() {
    this._scrollSub = this._scrollService.watchScrollPosition().subscribe({
      next: (position) => {
        console.log({ position });
        this.isNotOnTop.set(position > 0);
      },
    });
  }

  ngOnDestroy() {
    this._scrollSub?.unsubscribe();
  }
}
