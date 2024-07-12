import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AvatarComponent } from '../../shared/components/avatar/avatar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
