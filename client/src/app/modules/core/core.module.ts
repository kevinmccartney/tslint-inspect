import { NgModule, Optional, SkipSelf } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { AppStateService } from './services/app-state';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [
    AppStateService,
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. You should only import Core modules in the AppModule only.');
    }
  }
}
