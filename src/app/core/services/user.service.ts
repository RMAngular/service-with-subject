import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // optional: make the behavior subject private
  private musers$ = new BehaviorSubject<User[]>([]);

  // and expose the behavior subject as an observable.
  // Do this to prevent developers from adding to stream directly
  // from outside the service
  get users$(): Observable<User[]> {
    return this.musers$.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  loadAll() {
    this.httpClient
      .get<User[]>("/api/users")
      .subscribe(users => this.musers$.next(users));
  }

  loadByRole(role: string) {
    this.httpClient.get<User[]>("/api/users").subscribe(users =>
      this.musers$.next(
        // filter should be done server side (this is a demo)
        users.filter(user => user.role === role || role === "Admin")
      )
    );
  }
}
