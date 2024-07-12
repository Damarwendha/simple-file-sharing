import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { brand } from '../../../core/constants/brand';
import { MatCardModule } from '@angular/material/card';
import { NgOptimizedImage } from '@angular/common';
import { PlatformService } from '../../../shared/services/platform.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-auth-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    NgOptimizedImage,
    RouterLink,
    MatButtonModule,
  ],
  templateUrl: './auth-layout.component.html',
})
export class AuthLayoutComponent implements OnInit {
  public authType = '';
  public readonly brand = brand;
  public readonly year = new Date().getFullYear();

  constructor(
    private readonly _route: Router,
    private readonly _platformService: PlatformService
  ) {}

  ngOnInit() {
    this.authType = this._route.url.split('/')[1];
  }
}
