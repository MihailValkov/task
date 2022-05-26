import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  baseUrl = 'http://jsonplaceholder.typicode.com';
  
  constructor(private http: HttpClient) {}

  loadUsers() {
    return this.http.get(`${this.baseUrl}/users`);
  }

  loadUserById(userId: number) {
    return this.http.get(`${this.baseUrl}/users/${userId}`);
  }
}
