import {Component, OnInit} from "@angular/core";
import {Gorilla} from "../gorilla";
import {ModalService} from "../_modal";
import {GorillaService} from "../gorilla.service";
@Component({
  selector: "app-character",
  templateUrl: "character.component.html",
  styleUrls: ["character.component.css"],
})
export class CharacterComponent implements OnInit {
  gorilla: Gorilla;
  classes = ["Assassin", "Tank"];
  gorillaName;
  gorillaGender;
  gorillaClass;
  genders = ["Male", "Female"];
  constructor(
    private modalService: ModalService,
    private gorillaService: GorillaService
  ) {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  onClassSelect(event) {
    this.gorillaClass = event.target.id;
    this.modalService.close("class");
  }

  onGenderSelect(event) {
    this.gorillaGender = event.target.id;
    this.modalService.close("gender");
  }

  saveGorilla() {
    const gorillaObject: Gorilla = {
      name: this.gorillaName,
      class: this.gorillaClass,
      gender: this.gorillaGender,
      hp: 1000,
      damage: 100,
      coins: 100,
    };
    console.log("gorilla");
    this.gorillaService.saveGorilla(gorillaObject);
  }

  ngOnInit() {
    this.gorilla = this.gorillaService.getGorilla();
  }
}
