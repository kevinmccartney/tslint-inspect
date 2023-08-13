import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppStateService } from './services/app-state';
import { ErrorHandlerService } from './services/error-handler/error-handler.service';
import { StatePersistenceService } from './services/state-persistence';

@NgModule({
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule],
  exports: [BrowserModule, RouterModule, BrowserAnimationsModule],
  providers: [AppStateService, ErrorHandlerService, StatePersistenceService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. You should only import Core modules in the AppModule only.',
      );
    }
  }
}
