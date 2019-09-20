import { Component, HostBinding, Input, OnDestroy } from "@angular/core";
import { takeUntil } from 'rxjs/operators';

import { AppStateService } from 'src/app/modules/core/services/app-state';
import { Subject } from 'rxjs';

@Component({
  selector: 'tsli-view-base',
  templateUrl: './view-base.component.html'
})
export class ViewBaseComponent implements OnDestroy {
  @HostBinding('class.dark') isDarkMode = true;
  private destroy$: Subject<void> = new Subject();

  constructor(
    public appStateService: AppStateService,
  ) {
    this.appStateService.uiMode$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((mode: string) => {
        this.isDarkMode = mode === 'dark';
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
