import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from "./components/about/about.component";
import { GpsComponent } from "./components/shared/gps/gps.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ToPdfComponent } from "./components/shared/to-pdf/to-pdf.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuard } from "./guards/auth.guard";
import { ModalComponent } from "./components/shared/modal/modal.component";
export const ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "reserva", component: ReserveComponent, canActivate: [AuthGuard] },
  { path: "about", component: AboutComponent },
  { path: "busqueda", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "contacto", component: GpsComponent },
  { path: "fotos", component: ContactComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "to-pdf", component: ToPdfComponent },
  { path: "modal", component: ModalComponent },
  { path: "perfil", component: ProfileComponent, canActivate: [AuthGuard] },

  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "**", pathMatch: "full", redirectTo: "login" }
];
