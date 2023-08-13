import { Injectable } from '@angular/core';

@Injectable()
export class StatePersistenceService {
  get(key: string): string {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string) {
    return window.localStorage.setItem(key, value);
  }
}
