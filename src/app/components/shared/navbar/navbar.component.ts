import { Component } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  show = false;
  get isLogin() {
    return this.loginService.getToken();
  }
  constructor(
    private loginService: LoginService,
    private router: Router,
    private matDialog: MatDialog
  ) {}

  onLogout() {
    this.loginService.logoutUser();
    this.matDialog.open(ModalComponent, {
      data: { name: "Desea cerrar sesión ?", button1: "si", button2: "no" }
    });
  }

  showModal() {
    this.matDialog.open(ModalComponent);
  }
}
