import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private isClient: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    this.isClient = isPlatformBrowser(this.platformId);
  }

  getScrollPosition(): Observable<number> {
    if (this.isClient) {
      return fromEvent(window, 'scroll').pipe(
        map(() => this.checkScrollPosition()),
        startWith(this.checkScrollPosition())
      );
    } else {
      return new Observable((observer) => {
        observer.next(0);
        observer.complete();
      });
    }
  }

  private checkScrollPosition(): number {
    return (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    );
  }
}
