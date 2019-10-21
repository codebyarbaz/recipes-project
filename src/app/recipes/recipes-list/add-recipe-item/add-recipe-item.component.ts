import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { RecipesItem } from "../recipes-list.model";

@Component({
  selector: "app-add-recipe-item",
  templateUrl: "./add-recipe-item.component.html",
  styleUrls: ["./add-recipe-item.component.css"]
})
export class AddRecipeItemComponent implements OnInit {
  recipeDescription: string = "";
  recipeURL: string = "";

  @Output() onNewRecipeAdd: EventEmitter<RecipesItem> = new EventEmitter<
    RecipesItem
  >();

  constructor() {}

  ngOnInit() {}

  addNewRecipe(recipeTitle) {
    this.onNewRecipeAdd.emit({
      title: recipeTitle.value,
      description: this.recipeDescription,
      image: this.recipeURL
    });
  }
}
