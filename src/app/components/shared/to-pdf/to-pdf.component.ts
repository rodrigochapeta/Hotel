import { Component, ElementRef, ViewChild, OnInit } from "@angular/core";
import jsPDF from "jspdf";
import * as html2canvas from "html2canvas";
import QRCode from "qrcode";

@Component({
  selector: "app-to-pdf",
  templateUrl: "./to-pdf.component.html",
  styleUrls: ["./to-pdf.component.css"]
})
export class ToPdfComponent implements OnInit {
  urlQr: string;
  logo = "../../../../assets/img/logo.png";
  terminos =
    "Al hacer una Reserva de viaje, aceptás recibir (i) un e-mail que podemos enviarte poco antes de tu fecha de llegada, en el que vas a encontrar información sobre el destino y otros datos y ofertas (entre ellas ofertas de terceros, siempre y cuando hayas aceptado recibirlas) que sean relevantes para tu (Reserva de) viaje y destino, (ii) un e-mail después de tu llegada para calificar la experiencia con tu Proveedor de viajes y con el Servicio de viajes, y (iii) un e-mail que podemos enviarte después de tu estadía, invitándote a completar un formulario de comentarios de huéspedes. Consultá nuestra política de privacidad y cookies para más información acerca de cómo podemos ponernos en contacto con vos.";
  @ViewChild("screen") screen: ElementRef;
  @ViewChild("canvas") canvas: ElementRef;
  @ViewChild("downloadLink") downloadLink: ElementRef;
  constructor() {
    this.generateQr();
  }

  downloadImage() {
    console.log("this.urlQr :", this.urlQr);
    const doc = new jsPDF();
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL("image/png");
      // this.downloadLink.nativeElement.download = "marble-diagram.png";
      doc.addImage(this.downloadLink.nativeElement.href, "png", 10, 40, 180, 60);
      doc.save("marble-diagram.pdf");
    });
  }

  generateQr() {
    QRCode.toDataURL("000001")
      .then(url => {
        this.urlQr = url;
      })
      .catch(err => {
        console.error(err);
      });
  }

  ngOnInit() {}
}
