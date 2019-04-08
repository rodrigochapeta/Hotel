import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";

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
    return this.http.post("/api/Auth/Login", body, { responseType: "text" }).pipe(
      map(res => {
        return res;
      }),
      catchError((error: any) => {
        return of(error);
      })
    );
  }
}
