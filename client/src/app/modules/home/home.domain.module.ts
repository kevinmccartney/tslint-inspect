import { NgModule } from "@angular/core";

import { HomeViewComponent } from './components/home-view/home-view.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    HomeViewComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class HomeDomainModule {}
