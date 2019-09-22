import { NgModule } from "@angular/core";
import { RulesDomainModule } from "./rules.domain.module";
import { RulesRoutingModule } from "./rules.routing.module";

@NgModule({
  imports: [RulesDomainModule, RulesRoutingModule]
})
export class RulesRoutedModule {}
