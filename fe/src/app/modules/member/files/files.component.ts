import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [],
  templateUrl: './files.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilesComponent {}
