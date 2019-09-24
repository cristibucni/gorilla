import {Component, OnInit} from "@angular/core";
import {MarketService} from "../market.service";
import {Item} from "../item";
@Component({
  selector: "app-market",
  templateUrl: "./market.component.html",
  styleUrls: ["./market.component.css"],
})
export class MarketComponent implements OnInit {
  items: Item[];
  constructor(private marketService: MarketService) {}

  buyItem(item) {
    this.marketService.buyItem(item);
  }

  ngOnInit() {
    this.items = this.marketService.getMarketItems();
  }
}
