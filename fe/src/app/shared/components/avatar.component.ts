import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `<div
    class="flex items-center justify-center rounded-full bg-background overflow-hidden w-[100px] h-[100px] {{
      class
    }}"
    style.width="{{ size }}px"
    style.height="{{ size }}px"
  >
    <img
      [alt]="alt"
      class="w-full h-auto"
      [height]="size"
      sizes="100vw"
      [ngSrc]="src"
      [width]="size"
    />
  </div> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  @Input() src: string = '/images/blank.png';
  @Input() alt: string = 'Your Avatar';
  @Input() size: string = '34';
  @Input() class: string = '';
}
