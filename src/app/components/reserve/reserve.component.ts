import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
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
  costRoom = 0;
  day = 1000 * 60 * 60 * 24;
  minDate = new Date();
  maxDate = new Date();
  showDinner = false;
  arrayDinner: number[];
  reserveForm = {
    styleRoom: String,
    quantityRoom: Number,
    adultsByRoom: Number,
    childByRoom: Number,
    withDinner: String,
    numberDinner: Number,
    nights: Number,
    from: Date,
    until: Date,
    cost: Number
  };

  reserveIcon = "fas fa-list-alt fa-5x";
  constructor() {
    this.maxDate.setDate(this.minDate.getDate() + 180);
    this.people = [0, 1];
  }

  guardar(forma: any) {
    // this.people = forma.value.quantityRoom + 2;
  }

  update(forma) {
    console.log("forma :sdsdnskdndsnjksdnjk");
    if (!isNaN(forma.value.adultsByRoom + forma.value.childByRoom + forma.value.quantityRoom)) {
      this.people =
        forma.value.quantityRoom *
        (Number(forma.value.adultsByRoom) + Number(forma.value.childByRoom));
      this.arrayDinner = Array(this.people)
        .fill(this.people)
        .map((x, i) => i + 1);
    }
  }
  withDinner(forma) {
    this.update(forma);
    if (forma.value.withDinner === "true") {
      this.showDinner = true;
    } else {
      this.showDinner = false;
    }
  }

  calculate(forma, reserveForm) {
    this.update(forma);
    reserveForm.nights = (reserveForm.until - reserveForm.from) / this.day;

    this.costRoom =
      reserveForm.styleRoom === "Estándar"
        ? 1000
        : reserveForm.styleRoom === "Deluxe"
        ? 1500
        : 2000;

    if (reserveForm.withDinner === "true") {
      forma.value.cost =
        (this.costRoom * this.people + this.people * 100 * reserveForm.numberDinner) *
        reserveForm.nights;
      reserveForm.cost =
        (this.costRoom * this.people + this.people * 100 * reserveForm.numberDinner) *
        reserveForm.nights;
    } else {
      forma.value.cost = this.costRoom * this.people * reserveForm.nights;
      reserveForm.cost = this.costRoom * this.people * reserveForm.nights;
    }
    console.log("after ", forma.value.cost);
    console.log("reserveForm : after", reserveForm.cost);
  }

  ngOnInit() {
    /** spinner starts on init */
    // console.log("people :" + this.people);
  }
}
