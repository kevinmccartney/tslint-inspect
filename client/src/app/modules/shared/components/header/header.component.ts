import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AppStateService } from 'src/app/modules/core/services/app-state';

@Component({
  selector: 'tsli-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() uiMode: string;
  @Output() onUiModeToggle: EventEmitter<string> = new EventEmitter();

  constructor(
    public appStateService: AppStateService,
  ) {}

  handleClick() {
    this.onUiModeToggle.emit(this.uiMode === 'light' ? 'dark' : 'light');
  }
}
