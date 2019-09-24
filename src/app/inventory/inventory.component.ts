import {Component, OnInit} from "@angular/core";
import {InventoryService} from "../inventory.service";
import {Item} from "../item";
@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.css"],
})
export class InventoryComponent implements OnInit {
  inventory: Item[];
  constructor(private inventoryService: InventoryService) {}

  onSellClick(item) {
    this.inventoryService.sellItem(item);
  }

  ngOnInit() {
    this.inventory = this.inventoryService.getInventory();
    this.inventoryService.inventory$.subscribe(inventory => {
      this.inventory = inventory;
    });
  }
}
