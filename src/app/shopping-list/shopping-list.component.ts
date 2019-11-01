import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { ShoppingItem } from "../add-shopping-item/shopping-item.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  @Input() shoppingItem: ShoppingItem;

  @Output() onItemRemove: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit() {}

  removeShoppingItem(id: number): void {
    this.onItemRemove.emit(id);
  }
}
