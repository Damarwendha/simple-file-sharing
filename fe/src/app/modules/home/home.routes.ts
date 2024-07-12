import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./_layout_/home-layout.component').then(
        (m) => m.HomeLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'highest-earnings',
        loadComponent: () =>
          import('./highest-earnings/highest-earnings.component').then(
            (m) => m.HighestEarningsComponent
          ),
      },
      {
        path: 'payout-rates',
        loadComponent: () =>
          import('./payout-rates/payout-rates.component').then(
            (m) => m.PayoutRatesComponent
          ),
      },
    ],
  },
];
