import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../shared/interfaces/user';

@Injectable()
export class UserService {
  baseUrl = 'http://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  loadUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${this.baseUrl}/users`);
  }

  loadUserById(userId: number): Observable<IUser> {
    return this.http.get<IUser>(`${this.baseUrl}/users/${userId}`);
  }
}
