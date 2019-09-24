import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";
import {Gorilla} from "../gorilla";
@Component({
  selector: "app-gorilla",
  templateUrl: "./gorilla.component.html",
  styleUrls: ["./gorilla.component.css"],
})
export class GorillaComponent implements OnInit {
  @Input() gorillaName;
  @Input() gorillaClass;
  @Input() gorillaGender;
  gorilla: Gorilla = {
    name: this.gorillaName,
    class: this.gorillaClass,
    gender: this.gorillaGender,
    hp: 100,
    damage: 100,
    coins: 100,
  };

  ngOnChanges(changes) {
    this.gorilla = {
      name: this.gorillaName,
      class: this.gorillaClass,
      gender: this.gorillaGender,
      hp: 100,
      damage: 100,
      coins: 100,
    };
  }
  constructor() {}
  ngOnInit() {}
}
