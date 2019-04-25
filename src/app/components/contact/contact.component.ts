import { Component, OnInit } from "@angular/core";
import { ImagesService } from "../../services/images.service";
import { compileNgModule } from "@angular/compiler";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  loading = true;
  pageInit = 1;
  respuesta: any;
  constructor(private imagesService: ImagesService) {
    this.imagesService.getImages().subscribe(res => {
      this.respuesta = res;
      this.loading = false;
    });
  }

  ngOnInit() {}
}
