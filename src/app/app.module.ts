import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ReserveComponent } from "./components/reserve/reserve.component";
import { LoginComponent } from "./components/login/login.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { SearchComponent } from "./components/search/search.component";
import { ROUTES } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, PreloadAllModules } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { GpsComponent } from "./components/shared/gps/gps.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { CarouselComponent } from "./components/shared/carousel/carousel.component";
import { BannerComponent } from "./components/shared/banner/banner.component";
import { GalleryComponent } from "./components/shared/gallery/gallery.component";
import { RoomComponent } from "./components/shared/room/room.component";
import { SpaceComponent } from "./components/shared/space/space.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ReserveComponent,
    LoginComponent,
    NavbarComponent,
    SearchComponent,
    GpsComponent,
    SignUpComponent,
    LoadingComponent,
    CarouselComponent,
    BannerComponent,
    GalleryComponent,
    RoomComponent,
    SpaceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,

    RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
