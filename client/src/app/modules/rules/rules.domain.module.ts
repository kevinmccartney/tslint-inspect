import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { RulesViewComponent } from "./components";

@NgModule({
  imports: [SharedModule],
  declarations: [RulesViewComponent]
})
export class RulesDomainModule {}
