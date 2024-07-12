import { Routes } from '@angular/router';
import { authRoutes } from './pages/_auth_/auth.routes';
import { homeRoutes } from './pages/_home_/home.routes';
import { memberRoutes } from './pages/member/member.routes';

export const routes: Routes = [...homeRoutes, ...authRoutes, ...memberRoutes];
