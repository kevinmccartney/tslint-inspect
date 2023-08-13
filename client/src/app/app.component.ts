import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationError } from '@angular/router';
import { sliderAnimation } from './modules/shared/utilities/animations';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'tsli-client',
  templateUrl: './app.component.html',
  animations: [sliderAnimation],
})
export class AppComponent {
  getState(outlet: RouterOutlet) {
    return outlet.activatedRouteData.name || '';
  }

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(x => x instanceof NavigationError))
      .subscribe(x => this.router.navigateByUrl('/not-found'));
  }
}
