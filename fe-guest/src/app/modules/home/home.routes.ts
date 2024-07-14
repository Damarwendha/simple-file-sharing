import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/home-layout.component').then(
        (m) => m.HomeLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/index/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'highest-earnings',
        loadComponent: () =>
          import('./pages/highest-earnings/highest-earnings.component').then(
            (m) => m.HighestEarningsComponent
          ),
      },
      {
        path: 'payout-rates',
        loadComponent: () =>
          import('./pages/payout-rates/payout-rates.component').then(
            (m) => m.PayoutRatesComponent
          ),
      },
    ],
  },
];
