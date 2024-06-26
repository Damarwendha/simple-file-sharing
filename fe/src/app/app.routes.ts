import { Routes } from '@angular/router';
import { HomeComponent } from './pages/_home_/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
];
