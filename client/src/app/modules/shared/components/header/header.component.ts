import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppStateService } from 'src/app/modules/core/services/app-state';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'tsli-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() uiMode: string;
  @Output() onUiModeToggle: EventEmitter<string> = new EventEmitter();
  public links = [
    {
      label: 'Rules',
      route: 'rules',
    },
    {
      label: 'Configs',
      route: 'configs',
    },
    {
      label: 'Coverage',
      route: 'coverage',
    },
  ];

  constructor(
    public appStateService: AppStateService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) {}

  handleClick() {
    this.onUiModeToggle.emit(this.uiMode === 'light' ? 'dark' : 'light');
  }
}
