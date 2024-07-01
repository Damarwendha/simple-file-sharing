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
  @Input() alt: string = 'Avatar';
  @Input() size: string = '24';
  @Input() class: string = '';
}
