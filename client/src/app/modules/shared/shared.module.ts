import { NgModule } from "@angular/core";
import { TsliMatModule } from "./material.module";
import { CommonModule } from "@angular/common";
import {
  HeaderComponent,
  ViewBaseComponent,
  NotFoundViewComponent
} from "./components";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [TsliMatModule, CommonModule, RouterModule],
  declarations: [HeaderComponent, ViewBaseComponent, NotFoundViewComponent],
  exports: [
    TsliMatModule,
    CommonModule,
    HeaderComponent,
    ViewBaseComponent,
    RouterModule,
    NotFoundViewComponent
  ]
})
export class SharedModule {}
