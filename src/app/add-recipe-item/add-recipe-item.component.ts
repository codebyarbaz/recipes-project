import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { RecipesItem } from "./recipeItem.model";

@Component({
  selector: "app-add-recipe-item",
  templateUrl: "./add-recipe-item.component.html",
  styleUrls: ["./add-recipe-item.component.css"]
})
export class AddRecipeItemComponent implements OnInit {
  recipeDescription: string = "";
  recipeURL: string = "";
  itemNumber: number = 1;

  @Output() onNewRecipeAdd: EventEmitter<RecipesItem> = new EventEmitter<
    RecipesItem
  >();

  constructor() {}

  ngOnInit() {}

  addNewRecipe(recipeTitle) {
    // Send event to parent component
    this.onNewRecipeAdd.emit({
      id: this.itemNumber,
      title: recipeTitle.value, // With local reference
      description: this.recipeDescription,
      image: this.recipeURL
    });
    this.itemNumber++;
    // Clear Form Fields
    this.recipeDescription = "";
    this.recipeURL = "";
    recipeTitle.value = "";
  }
}
