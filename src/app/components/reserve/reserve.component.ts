import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"]
})
export class ReserveComponent implements OnInit {
  people: any;
  quantity = [1, 2, 3, 4, 5];
  childs = [0, 1, 2, 3];
  styleRoom = ["Estándar", "Deluxe", "Executive"];
  minDate = new Date();
  maxDate = new Date();
  showDinner = false;
  reserveForm = {
    styleRoom: String,
    quantityRoom: Number,
    adultsByRoom: Number,
    childByRoom: Number,
    nights: Number,
    withDinner: String,
    numberDinner: Number,
    from: Date,
    until: Date
  };
  arrayDinner: number[];

  reserveIcon = "fas fa-list-alt fa-5x";
  constructor() {
    this.maxDate.setDate(this.minDate.getDate() + 180);
    this.people = [0, 1];
    
  }

  guardar(forma: any) {
    // this.people = forma.value.quantityRoom + 2;
  }

  update(forma) {
    if (forma.value.adultsByRoom > 0) {
      console.log("adults",forma.value.adultsByRoom);
    }

    if (
      forma.value.adultsByRoom &&
      forma.value.childByRoom &&
      forma.value.quantityRoom
    ) {
      this.people =
        forma.value.quantityRoom *
        (Number(forma.value.adultsByRoom) + Number(forma.value.childByRoom));
      this.arrayDinner = Array(this.people)
        .fill(this.people)
        .map((x, i) => i + 1);
    }
  }
  calculate(forma) {
    if (forma.value.withDinner === "true") {
      this.showDinner = true;
    } else {
      this.showDinner = false;
    }
    console.log(this.reserveForm);
  }

  ngOnInit() {
    /** spinner starts on init */
    // console.log("people :" + this.people);
  }
}
