import {Injectable} from "@angular/core";
import {Gorilla} from "./gorilla";
import {Subject} from "rxjs";
import {InventoryService} from "./inventory.service";
import {Item} from "./item";
@Injectable({
  providedIn: "root",
})
export class GorillaService {
  gorilla: Gorilla = {
    name: "Catavencu",
    class: "Assassin",
    gender: "Male",
    hp: 1000,
    damage: 100,
    coins: 100,
  };

  inventory: Item[];

  private gorillaSource = new Subject<Gorilla>();
  gorilla$ = this.gorillaSource.asObservable();

  private coinsSource = new Subject<number>();
  coins$ = this.coinsSource.asObservable();
  saveGorilla(gorilla: Gorilla) {
    this.gorillaSource.next(gorilla);
    this.gorilla = gorilla;
  }

  increaseStats(item) {
    this.gorilla.hp = this.gorilla.hp + item.hp;
    this.gorilla.damage = this.gorilla.damage + item.damage;
  }

  reduceStats(item) {
    this.gorilla.hp = this.gorilla.hp - item.hp;
    this.gorilla.damage = this.gorilla.damage - item.damage;
    this.gorillaSource.next(this.gorilla);
  }

  addCoins(value) {
    this.gorilla.coins = this.gorilla.coins + value;
    this.coinsSource.next(this.gorilla.coins);
  }

  substractCoins(value) {
    this.gorilla.coins = this.gorilla.coins - value;
    this.coinsSource.next(this.gorilla.coins);
  }

  getCoins() {
    return this.gorilla.coins.toFixed(2);
  }

  getGorilla() {
    return this.gorilla;
  }
  constructor() {}
}
