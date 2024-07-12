import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { brand } from '../../../core/constants/brand';
import { NgOptimizedImage } from '@angular/common';
import { MemberNavbarComponent } from './navbar/member-navbar.component';

@Component({
  selector: 'app-member-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    NgOptimizedImage,
    MemberNavbarComponent,
  ],
  templateUrl: './member-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberLayoutComponent {
  public readonly brand = brand;
}
