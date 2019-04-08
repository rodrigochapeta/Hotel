import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  // model: any = {};
  constructor(private loginService: LoginService, private router: Router) {}
  body = {
    username: "",
    password: ""
  };
  submitted = false;

  ngOnInit() {}

  onSubmit() {
    return this.loginService.login(this.body).subscribe(res => {
      if (res.status) {
        if (res.status === 401) {
          alert("Usuario o contraseña incorrecta");
        }
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }
}
