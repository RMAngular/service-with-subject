import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService implements InMemoryDbService {
  users$ = new BehaviorSubject<User[]>([]);

  constructor(private httpClient: HttpClient) {}

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

  list(): Observable<Array<User>> {
    return this.httpClient
      .get<User[]>('/api/users')
      .pipe(tap(users => this.users$.next(users)));
  }

  createDb(): { users: User[] } {
    let users = [
      {
        id: 1,
        name: 'Jesse Sanders',
        role: 'admin'
      },
      {
        id: 2,
        name: 'Steve Whitman',
        role: 'user'
      },
      {
        id: 3,
        name: 'Brian Love',
        role: 'user'
      }
    ];
    return { users };
  }
}
