import { Component } from "@angular/core";
import { RecipesItem } from "./add-recipe-item/recipeItem.model";
import { ShoppingItem } from "./add-shopping-item/shopping-item.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  recipes: RecipesItem[] = [];
  shoppingList: ShoppingItem[] = [];

  display: string = "recipe";

  constructor() {}

  setSection(display: string): void {
    this.display = display;
  }

  // Recipe
  addNewRecipe(recipeDetail: RecipesItem): void {
    this.recipes.push(recipeDetail);
  }

  DeleteRecipe(id: number): void {
    const itemIndex = this.recipes.findIndex(
      (item: RecipesItem): boolean => item.id === id
    );
    if (itemIndex > -1) {
      this.recipes.splice(itemIndex, 1);
    }
  }

  // Shopping
  onNewItemAdded(item: ShoppingItem): void {
    this.shoppingList.push(item);
  }

  removeItem(id: number): void {
    const itemIndex = this.shoppingList.findIndex(
      (item: ShoppingItem): boolean => item.id === id
    );
    if (itemIndex > -1) {
      this.shoppingList.splice(itemIndex, 1);
    }
  }
}
