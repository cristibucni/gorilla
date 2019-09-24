import {Injectable} from "@angular/core";
import {Item} from "./item";
import {InventoryService} from "./inventory.service";
import {GorillaService} from "./gorilla.service";
@Injectable({
  providedIn: "root",
})
export class MarketService {
  marketItems: Item[] = [
    {
      id: 0,
      name: "Basic Sword",
      type: "Weapon",
      hp: 0,
      damage: 5,
      icon: "../../assets/images/basicsword.svg",
      price: 1,
    },
    {
      id: 1,
      name: "Basic Armor",
      type: "Armor",
      hp: 74,
      damage: 0,
      icon: "../../assets/images/basicarmor.svg",
      price: 0,
    },
    {
      id: 2,
      name: "Basic Leggings",
      type: "Armor",
      hp: 54,
      damage: 0,
      icon: "../../assets/images/basicleggings.svg",
      price: 0,
    },
    {
      id: 3,
      name: "Basic Helmet",
      type: "Armor",
      hp: 35,
      damage: 0,
      icon: "../../assets/images/basichelmet.svg",
      price: 0,
    },
  ];

  getMarketItems() {
    return this.marketItems;
  }

  buyItem(item) {
    this.inventoryService.addItem(
      this.marketItems.find(element => {
        return element.id === item.id;
      })
    );
    this.gorillaService.substractCoins(item.price);
  }
  constructor(
    private inventoryService: InventoryService,
    private gorillaService: GorillaService
  ) {}
}
