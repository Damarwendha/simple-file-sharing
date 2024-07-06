import { Component } from '@angular/core';
import { HomeNavbarComponent } from '../home-navbar/home-navbar.component';
import { HomeComponent } from '../../pages/_home_/home.component';
import { RouterOutlet } from '@angular/router';
import { HomeFooterComponent } from '../home-footer/home-footer.component';

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
})
export class HomeLayoutComponent {}
