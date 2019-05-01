import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"]
})
export class ReserveComponent implements OnInit {
  reserveForm: object = {
    styleRoom: String,
    quantityByRoom: String,
    adultsByRoom: String,
    childByRoom: Number,
    nights: Number,
    withDinner: Boolean,
    NumberDinner: Number,
    from: Date,
    until: Date
  };

  quantity = [1, 2, 3, 4, 5];
  childs = [0, 1, 2, 3];
  styleRoom = ["Estándar", "Deluxe", "Executive"];
  minDate = new Date();
  maxDate = new Date();

  reserveIcon = "fas fa-list-alt fa-5x";
  constructor(private ngxSpinnerService: NgxSpinnerService) {
    this.maxDate.setDate(this.minDate.getDate() + 180);
  }

  guardar(forma: any) {
    console.log("forma", forma);
  }

  ngOnInit() {
    console.log("minDate :", this.minDate);
    /** spinner starts on init */
  }
}
