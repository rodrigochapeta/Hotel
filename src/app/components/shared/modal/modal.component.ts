import { Component, Inject } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent {
  constructor(
    public dialog: MatDialog,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  login() {
    this.dialog.closeAll();
    this.router.navigate(["/login"]);
  }
  sign() {
    this.dialog.closeAll();
    this.router.navigate(["/sign-up"]);
  }
}
