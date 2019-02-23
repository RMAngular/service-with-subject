import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap, withLatestFrom } from "rxjs/operators";

import { User } from "../models/user.model";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private httpClient: HttpClient) {}

  loadByRole(role: string) {
    this.httpClient
      .get<User[]>("/api/users")
      .subscribe(users =>
        this.users$.next(
          users.filter(user => user.role === role || role === "Admin")
        )
      );
  }
}
