import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatAll, filter, first, map, mergeAll } from 'rxjs';
import { User } from '../models/user.model';

type UserAPIResponse = User[];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userConnected: User | null = null;

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {

    // sign in mock, don't do this
    return this.httpClient
      .get<UserAPIResponse>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((response) => {
          const users: User[] = response
            .filter((user: User) => user.email === email)
          if (users.length > 0) {
            this.userConnected = users[0];
            return users[0];
          } else {
            return null
          }
        })
      )
  }
}
