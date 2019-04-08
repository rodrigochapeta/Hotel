import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {
    console.log("Spotify service up");
  }
  getUsers() {
    this.http.get("/api/Usuario").subscribe(data => console.log("data :", data));
  }
  createUser(body) {
    return this.http.post("/api/Usuario", body).pipe(
      map(res => res),
      catchError((error: any) => {
        return of(error);
      })
    );
  }
}
