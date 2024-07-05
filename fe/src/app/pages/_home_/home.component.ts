import { Component } from '@angular/core';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvatarComponent, MatButtonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
