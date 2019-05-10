import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { MatDialog } from "@angular/material";
import { ModalComponent } from "../components/shared/modal/modal.component";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private matDialog: MatDialog
  ) {}
  canActivate() {
    if (this.loginService.getToken()) {
      return true;
    } else {
      this.matDialog.open(ModalComponent, {
        data: { name: "Acceso Bloqueado", button1: "Login", button2: "Nueva cuenta" }
      });
      return false;
    }
  }
}
