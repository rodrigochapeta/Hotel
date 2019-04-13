import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"]
})
export class BannerComponent implements OnInit {
  @Input() public icon = "";
  @Input() public background: boolean;
  @Input() public text: boolean;

  constructor() {}
  ngOnInit() {
    console.log("nombre, text :", this.icon);
  }
}