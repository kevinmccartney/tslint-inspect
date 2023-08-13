import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AppStateService } from 'src/app/modules/core/services/app-state';
import { ActivatedRoute, Router } from '@angular/router';
import { findIndex } from 'lodash';

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

  handleNavigation(destination: string) {
    const source = this.router.routerState.snapshot.url.replace('/', '');
    const sourceIndex = findIndex(this.links, (x: any) => x.route === source);
    const destinationIndex = findIndex(
      this.links,
      (x: any) => x.route === destination.replace('/', ''),
    );

    const animation =
      sourceIndex > destinationIndex ? `slideLeft` : `slideRight`;

    this.router.navigateByUrl(destination, { state: { animation } });
  }
}
