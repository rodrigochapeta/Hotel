import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { UserInterface } from "../models/user-interface";
import { isNullOrUndefined } from "util";
@Injectable({
  providedIn: "root"
})
export class LoginService {
  objetos = {
    token: ""
  };

  constructor(private http: HttpClient) {
    console.log("Spotify service up");
  }

  login(body) {
    return this.http
      .post("https://hotel.test.venga.io/api/Auth/Login", body, { observe: "response" })
      .pipe(
        map(res => {
          return res;
        }),
        catchError((error: any) => {
          return of(error);
        })
      );
  }

  setToken(token): void {
    localStorage.setItem("accessToken", token);
  }

  getToken() {
    return localStorage.getItem("accessToken");
  }

  setUser(user: UserInterface): void {
    const userString = JSON.stringify(user);
    localStorage.setItem("currentUser", userString);
  }

  getCurrentUser(): UserInterface {
    const userString = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(userString)) {
      const user: UserInterface = JSON.parse(userString);
      return user;
    } else {
      console.log("no hay usuario logueado:");
      return null;
    }
  }

  logoutUser() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("currentUser");
  }
}
