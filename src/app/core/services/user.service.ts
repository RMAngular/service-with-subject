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

  list(role: string) {
    this.httpClient
      .get<User[]>("/api/users")
      .subscribe(users =>
        this.users$.next(
          users.filter(user => user.role === role || role === "Admin")
        )
      );
  }

  getById(id: number) {
    return this.httpClient
      .get<User>(`/api/users/${id}`)
      .pipe(withLatestFrom(this.users$))
      .subscribe(([user, users]) => {
        const index = users.map(u => u.id).indexOf(user.id);
        if (index === -1) {
          users.push(user);
        } else {
          users[index] = user;
        }
        this.users$.next(users);
      });
  }
}
