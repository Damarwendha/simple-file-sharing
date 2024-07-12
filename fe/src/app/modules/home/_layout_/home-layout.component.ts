import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeNavbarComponent } from './navbar/home-navbar.component';
import { HomeComponent } from '../home.component';
import { RouterOutlet } from '@angular/router';
import { HomeFooterComponent } from './footer/home-footer.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    HomeNavbarComponent,
    HomeFooterComponent,
    HomeComponent,
    RouterOutlet,
  ],
  templateUrl: './home-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeLayoutComponent {}
