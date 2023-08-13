import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StatePersistenceService } from '../state-persistence';
import { merge } from 'rxjs';

@Injectable()
export class AppStateService {
  private _state = {};
  
  uiMode$: BehaviorSubject<string> = new BehaviorSubject(
    process.env.UI_THEME || 'dark',
  );

  constructor(private statePersistanceService: StatePersistenceService) {
    const state = this.statePersistanceService.get('tsli_state');

    if(state) {
      && this.uiMode$.next(uiMode);
    }

    merge(
      this.uiMode$
    ).subscribe(x => x);
  }
}
