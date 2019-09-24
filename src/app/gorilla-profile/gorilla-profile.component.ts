import {Component, OnInit} from "@angular/core";
import {GorillaService} from "../gorilla.service";
import {Gorilla} from "../gorilla";
@Component({
  selector: "app-gorilla-profile",
  templateUrl: "./gorilla-profile.component.html",
  styleUrls: ["./gorilla-profile.component.css"],
})
export class GorillaProfileComponent implements OnInit {
  gorilla: Gorilla;

  constructor(private gorillaService: GorillaService) {}

  ngOnInit() {
    this.gorilla = this.gorillaService.getGorilla();
    this.gorillaService.gorilla$.subscribe(gorilla => {
      this.gorilla = gorilla;
    });
  }
}
