import { Routes } from '@angular/router';
import { authRoutes } from './modules/auth/auth.routes';
import { homeRoutes } from './modules/home/home.routes';
import { memberRoutes } from './modules/member/member.routes';

export const routes: Routes = [...homeRoutes, ...authRoutes, ...memberRoutes];
