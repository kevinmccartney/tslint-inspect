import { NgModule } from "@angular/core";
import { ConfigsDomainModule } from "./configs.domain.module";
import { ConfigsRoutingModule } from "./configs.routing.module";

@NgModule({
  imports: [ConfigsDomainModule, ConfigsRoutingModule]
})
export class ConfigsRoutedModule {}
