import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { brand } from '../../../../core/constants/brand';
import { AvatarComponent } from '../../../../shared/components';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-member-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatIconModule,
    MatMenuModule,
    RouterLink,
    NgOptimizedImage,
    AvatarComponent,
    MatButtonModule,
  ],
  templateUrl: './member-navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MemberNavbarComponent {
  public readonly brand = brand;
}
