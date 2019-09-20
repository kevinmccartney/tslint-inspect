import { NgModule } from '@angular/core';
import { HomeDomainModule } from './home.domain.module';
import { HomeRoutingModule } from './home.routing.module';

@NgModule({
  imports: [
    HomeDomainModule,
    HomeRoutingModule,
  ]
})
export class HomeRoutedModule {}
