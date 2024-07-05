import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/home-layout/home-layout.component').then(
        (m) => m.HomeLayoutComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/_home_/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'highest-earnings',
        loadComponent: () =>
          import(
            './pages/_home_/highest-earnings/highest-earnings.component'
          ).then((m) => m.HighestEarningsComponent),
      },
      {
        path: 'payout-rates',
        loadComponent: () =>
          import('./pages/_home_/payout-rates/payout-rates.component').then(
            (m) => m.PayoutRatesComponent
          ),
      },
    ],
  },
];
