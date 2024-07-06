import { Routes } from '@angular/router';
import { authRoutes } from './pages/_auth_/auth.routes';
import { homeRoutes } from './pages/_home_/home.routes';

export const routes: Routes = [...homeRoutes, ...authRoutes];
