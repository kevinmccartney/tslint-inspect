import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { HomeViewComponent } from './components/home-view/home-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: HomeViewComponent,
      }
    ]),
  ]
})
export class HomeRoutingModule {}
