import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-highest-earnings',
  standalone: true,
  imports: [],
  templateUrl: './highest-earnings.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighestEarningsComponent {}
