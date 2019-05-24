import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { of } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ReserveService {
  constructor(private http: HttpClient) {}
  createreserve(body) {
    console.log(body, "body");
    return this.http.post("https://hotel.test.venga.io/api/usuario", body).pipe(
      map(res => console.log(res, "slkdnaksdkaskldsal")),
      catchError((error: any) => {
        return of(error);
      })
    );
  }
}
