import { Routes } from '@angular/router';

export const authRoutes: Routes = [
  {
    path: 'auth',
    loadComponent: () =>
      import('./layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      {
        path: 'signin',
        loadComponent: () =>
          import('./pages/signin/signin.component').then(
            (m) => m.SigninComponent
          ),
      },
    ],
  },
];
