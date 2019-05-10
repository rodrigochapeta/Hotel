import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { UserInterface } from "../../models/user-interface";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  imageProfile = "fas fa-address-card fa-5x";
  user: UserInterface;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.user = this.loginService.getCurrentUser();
  }
}
