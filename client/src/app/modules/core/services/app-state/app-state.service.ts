import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AppStateService {
  uiMode$: BehaviorSubject<"light" | "dark"> = new BehaviorSubject("light");
}
