import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"]
})
export class ReserveComponent implements OnInit {
  reserveForm = {
    type: String,
    quantityRoom: String,
    personsByRoom: String,
    childByRoom: Number,
    nights: Number
  };
  quantity = [1, 2, 3, 4, 5];
  childs = [0, 1, 2, 3];
  styleRoom = ["Estándar", "Deluxe", "Executive"];

  reserveIcon = "fas fa-list-alt fa-5x";
  constructor(private ngxSpinnerService: NgxSpinnerService) {}

  ngOnInit() {
    /** spinner starts on init */
    this.ngxSpinnerService.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.ngxSpinnerService.hide();
    }, 5000);
  }
}
