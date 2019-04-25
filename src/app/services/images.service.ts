import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  getImages() {
    return this.http
      .get(
        "https://pixabay.com/api/?key=12177442-531d2b602853027f4bf7e9f74&q=hotel&image_type=photo&per_page=90"
      )
      .pipe(
        map((res: any) => res.hits),
        catchError((error: any) => {
          return of(error);
        })
      );
  }
}
