import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RulesViewComponent } from "./components";

const routes: Routes = [
  {
    path: "",
    component: RulesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class RulesRoutingModule {}
