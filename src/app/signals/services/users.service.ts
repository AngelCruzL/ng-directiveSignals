import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SingleUserResponse, User } from '../types/user-request';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  #http = inject(HttpClient);
  #baseUrl = 'https://reqres.in/api/users';

  getUserById(id: number): Observable<User> {
    return this.#http
      .get<SingleUserResponse>(`${this.#baseUrl}/${id}`)
      .pipe(map(response => response.data));
  }
}
