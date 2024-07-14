import { Routes } from '@angular/router';

export const memberRoutes: Routes = [
  {
    path: 'member',
    loadComponent: () =>
      import('./layout/member-layout.component').then(
        (m) => m.MemberLayoutComponent
      ),
    children: [
      {
        path: 'files',
        loadComponent: () =>
          import('./pages/files/files.component').then((m) => m.FilesComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
];
