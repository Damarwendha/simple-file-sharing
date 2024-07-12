import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css',
})
export class AvatarComponent {
  @Input() src: string = '/images/blank.png';
  @Input() alt: string = 'Your Avatar';
  @Input() size: string = '34';
  @Input() class: string = '';
}
