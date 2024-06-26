import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        `CoreModule has already been loaded. Import it in the AppModule only.`
      );
    }
  }
}
