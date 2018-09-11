import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap, withLatestFrom } from "rxjs/operators";

import { User } from "../models/user.model";
import { first } from "rxjs/internal/operators/first";

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

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(`/api/users/${id}`).pipe(
      withLatestFrom(this.users$),
      tap(([user, users]) => {
        const index = users.map(user => user.id).indexOf(user.id);
        if (index === -1) {
          users.push(user);
          this.users$.next(users);
        } else {
          users[index] = user;
          this.users$.next(users);
        }
      }),
      map(([user]) => user)
    );
  }
}
