import { Routes } from '@angular/router';

export const memberRoutes: Routes = [
  {
    path: 'member',
    loadComponent: () =>
      import('./_layout_/member-layout.component').then(
        (m) => m.MemberLayoutComponent
      ),
    children: [
      {
        path: 'files',
        loadComponent: () =>
          import('./files/files.component').then((m) => m.FilesComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (m) => m.DashboardComponent
          ),
      },
    ],
  },
];
