import { NgModule } from "@angular/core";
import { SharedModule } from "../shared";
import { ConfigsViewComponent } from "./components";

@NgModule({
  imports: [SharedModule],
  declarations: [ConfigsViewComponent]
})
export class ConfigsDomainModule {}
