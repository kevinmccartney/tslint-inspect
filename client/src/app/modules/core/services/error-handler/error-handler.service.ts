import { Injectable, ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private router: Router) {}

  handleError(err: Error) {
    console.dir(err);
    this.router.navigateByUrl('/error');
  }
}
