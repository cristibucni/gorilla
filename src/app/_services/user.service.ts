import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {User} from "../_models/user";
import {Gorilla} from "../gorilla";
import {environment} from "@environments/environment";
@Injectable({providedIn: "root"})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  saveGorilla(gorilla: Gorilla) {
    return this.http.put<Gorilla>(
      `${environment.apiUrl}/user/saveGorilla`,
      gorilla
    );
  }

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
