import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-home-footer',
  standalone: true,
  imports: [],
  templateUrl: './home-footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeFooterComponent {}
