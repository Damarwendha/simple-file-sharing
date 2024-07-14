import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';
import { dashboardRoutes } from './modules/dashboard/dashboard.routes';

export const routes: Routes = [...authRoutes, ...dashboardRoutes];
