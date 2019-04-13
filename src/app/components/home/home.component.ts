import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  imageRoom = "fas fa-bed fa-7x";
  imageGallery = "fas fa-images fa-7x";

  loading = true;
  constructor(private userService: UsersService) {
    this.loading = true;
    this.userService.getUsers();
  }

  ngOnInit() {}
}
