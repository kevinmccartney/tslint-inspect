import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ConfigsViewComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    component: ConfigsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class ConfigsRoutingModule {}
