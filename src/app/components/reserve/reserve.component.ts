import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { ReserveService } from "../../services/reserve.service";
import { LoginService } from "../../services/login.service";
import { UserInterface } from "src/app/models/user-interface";

@Component({
  selector: "app-reserve",
  templateUrl: "./reserve.component.html",
  styleUrls: ["./reserve.component.css"]
})
export class ReserveComponent implements OnInit {
  done = false;
  people: any;
  user: UserInterface;
  quantity = [1, 2, 3, 4, 5];
  childs = [0, 1, 2, 3];
  styleRoom = ["Estándar", "Deluxe", "Executive"];
  costRoom = 0;
  day = 1000 * 60 * 60 * 24;
  today = 0;
  nextDay = 0;

  minDate = new Date();
  maxDate = new Date();
  minDateFrom = new Date();
  maxDateUntil = new Date();

  showDinner = false;
  arrayDinner: number[];
  print = false;

  reserveForm = {
    styleRoom: "",
    quantityRoom: 0,
    adultsByRoom: 0,
    childByRoom: 0,
    withDinner: "",
    numberDinner: 0,
    nights: 0,
    from: "",
    until: "",
    cost: 0
  };

  reserveIcon = "fas fa-list-alt fa-5x";
  constructor(private reserveService: ReserveService, private loginService: LoginService) {
    this.user = this.loginService.getCurrentUser();
    this.maxDate.setDate(this.minDate.getDate() + 180);
    this.today = this.minDate.getTime() + this.day;
    this.minDateFrom = new Date(this.today);
    this.people = [0, 1];
  }

  guardar(forma: any) {
    // this.people = forma.value.quantityRoom + 2;
  }

  update(forma) {
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

  changeSelected(value, forma) {
    this.update(forma);
    this.showDinner = value === "true" ? true : false;
  }
  changeDate(forma) {
    this.nextDay = forma.value.from.getTime() + this.day;
    this.minDateFrom = new Date(this.nextDay);
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
      reserveForm.numberDinner = 0;
      forma.value.cost = this.costRoom * this.people * reserveForm.nights;
      reserveForm.cost = this.costRoom * this.people * reserveForm.nights;
    }
  }
  reserve() {
    const body = { usuario: this.user, reserva: this.reserveForm };

    this.print = true;
    this.reserveService.createreserve(body).subscribe(res => {
      if (res.status) {
      }
    });
    this.done = true;
  }
  ngOnInit() {
    /** spinner starts on init */
  }
}
