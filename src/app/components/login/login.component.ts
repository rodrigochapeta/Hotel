import { Component, AfterViewInit, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading: boolean;
  constructor(private loginService: LoginService, private router: Router) {
    this.loading = true;
  }

  body = {
    username: "",
    password: ""
  };
  submitted = false;
  ngOnInit() {
    this.loading = false;
  }

  onSubmit() {
    return this.loginService.login(this.body).subscribe(res => {
      if (res.status) {
        if (res.status !== 200) {
          alert("Usuario o contraseña incorrecta");
        } else {
          this.loading = false;
          const token = res.body.password;
          this.loginService.setToken(token);
          this.loginService.setUser(res.body);
          this.router.navigate(["/perfil"]);
        }
      } else {
        alert("Ocurrio un error en la conexión");
      }
    });
  }
}
