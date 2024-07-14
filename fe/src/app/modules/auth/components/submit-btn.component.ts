import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-submit-btn',
  standalone: true,
  imports: [MatButton],
  changeDetection: ChangeDetectionStrategy.OnPush,

  template: ` <button
    mat-flat-button
    class="!w-full !rounded-lg !mt-8"
    type="submit"
  >
    {{ label }}
  </button>`,
})
export class SubmitButtonComponent {
  @Input({ required: true }) label!: string;
}
