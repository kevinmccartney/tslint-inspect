import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { SharedModule } from './modules/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, AppRoutingModule, SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
