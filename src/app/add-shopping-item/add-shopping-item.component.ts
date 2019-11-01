import { Component, EventEmitter, Output } from "@angular/core";
import { ShoppingItem } from "./shopping-item.model";

@Component({
  selector: "app-add-shopping-item",
  templateUrl: "./add-shopping-item.component.html",
  styles: ["./add-shopping-item.component.css"]
})
export class AddShoppingItemComponent {
  name: string = "";
  price: string = "";
  quantity: string = "";
  id: number = 1;

  @Output() onNewItemAdd: EventEmitter<ShoppingItem> = new EventEmitter<
    ShoppingItem
  >();

  addNewItem() {
    const itemObj = {
      id: this.id,
      name: this.name,
      price: parseInt(this.price),
      quantity: parseInt(this.quantity)
    };
    this.onNewItemAdd.emit(itemObj);
    this.name = "";
    this.price = "";
    this.quantity = "";
    this.id++;
  }
}
