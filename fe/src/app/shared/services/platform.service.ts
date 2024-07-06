import { Injectable, Inject, OnInit } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class PlatformService {
  public readonly isClient: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isClient = isPlatformBrowser(this.platformId);
  }
}
