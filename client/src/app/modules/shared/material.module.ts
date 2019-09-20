import { NgModule } from "@angular/core";
import { MatButtonModule , MatSlideToggleModule, MatToolbarModule, MatIconModule, MatTabsModule} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
  ]
})
export class TsliMatModule {}
