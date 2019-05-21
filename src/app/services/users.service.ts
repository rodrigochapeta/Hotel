import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers() {
    this.http.get("https://hotel.test.venga.io/api/usuario").subscribe(res => res);
  }

  createUser(body) {
    return this.http.post("https://hotel.test.venga.io/api/usuario", body).pipe(
      map(res => res),
      catchError((error: any) => {
        return of(error);
      })
    );
  }
}
