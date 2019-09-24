import {Injectable} from "@angular/core";
import {Item} from "./item";
import {GorillaService} from "./gorilla.service";
import {Subject} from "rxjs";
@Injectable({
  providedIn: "root",
})
export class InventoryService {
  MAX_INVENTORY_ITEMS = 6;
  inventory: Item[] = [];

  private inventorySource = new Subject<Item[]>();
  inventory$ = this.inventorySource.asObservable();
  getInventory() {
    return this.inventory;
  }

  addItem(item: Item) {
    if (!this.inventory.includes(item)) {
      this.inventory.push(item);
      this.gorillaService.increaseStats(item);
      window.alert("You bought " + item.name);
    } else {
      window.alert("You already own this item");
    }
  }

  sellItem(item: Item) {
    if (window.confirm("Are you sure you want to sell " + item.name + "?")) {
      this.inventory = this.inventory.filter(element => {
        return element.id !== item.id;
      });
      this.inventorySource.next(
        this.inventory.filter(element => {
          return element.id !== item.id;
        })
      );
      this.gorillaService.reduceStats(item);
      this.gorillaService.addCoins(item.price / 10);
    }
  }

  constructor(private gorillaService: GorillaService) {}
}
