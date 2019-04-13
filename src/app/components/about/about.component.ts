import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  text =
    "La historia del Hotel Duraznito se remonta a 1978, cuando abrió las puertas su primer establecimiento, el hotel Ciudad de Cordoba. Cuatro años después, la hotelera sale de la región de las sierras y, con la incorporación del Hotel Perita de  Villa General Belgrano  , da los primeros pasos de lo que, tan sólo una década después, será una de las primeras cadenas del sector en el interior del Pais, con establecimientos abiertos en Mendoza, Santa Fe y Cordoba.";
  peach = "fas fa-apple-alt fa-5x";
  constructor() {}

  ngOnInit() {}
}
