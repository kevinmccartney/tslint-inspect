import { NgModule } from '@angular/core';
import { TsliMatModule } from './material.module';
import { CommonModule } from '@angular/common';
import {
  HeaderComponent,
  ViewBaseComponent,
  NotFoundViewComponent,
  ErrorViewComponent,
} from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [TsliMatModule, CommonModule, RouterModule],
  declarations: [
    HeaderComponent,
    ViewBaseComponent,
    NotFoundViewComponent,
    ErrorViewComponent,
  ],
  exports: [
    TsliMatModule,
    CommonModule,
    HeaderComponent,
    ViewBaseComponent,
    RouterModule,
    NotFoundViewComponent,
    ErrorViewComponent,
  ],
})
export class SharedModule {}
