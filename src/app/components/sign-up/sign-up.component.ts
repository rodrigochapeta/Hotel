import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}
  body = {
    id: "",
    username: "",
    password: "test",
    nombre: "test",
    apelllido: "test",
    email: "test",
    telefono: "test",
    role: "client",
    estado: "activo"
  };
  loaded = true;

  submitted = false;
  ngOnInit() {}

  onSubmit() {
    console.log("body :", this.body);
    return this.userService.createUser(this.body).subscribe(res => {
      console.log("res :", res);
      if (res.status) {
        if (res.status === 401) {
          alert("Usuario o contraseña incorrecta");
        } else if (res.status > 202) {
          alert("Error al loguear");
        }
      } else {
        this.router.navigate(["/home"]);
      }
    });
  }

  onLoad() {
    this.loaded = false;
  }
}
