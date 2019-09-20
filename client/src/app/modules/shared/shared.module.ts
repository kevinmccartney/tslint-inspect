import { NgModule } from "@angular/core";
import { TsliMatModule } from './material.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent, ViewBaseComponent } from './components';

@NgModule({
  imports: [
    TsliMatModule,
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    ViewBaseComponent,
  ],
  exports: [
    TsliMatModule,
    CommonModule,
    HeaderComponent,
    ViewBaseComponent,
  ]
})
export class SharedModule {}
