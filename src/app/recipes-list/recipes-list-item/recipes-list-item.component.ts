import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { RecipesItem } from "../../add-recipe-item/recipeItem.model";

@Component({
  selector: "app-recipes-list-item",
  templateUrl: "./recipes-list-item.component.html",
  styleUrls: ["./recipes-list-item.component.css"]
})
export class RecipesListItemComponent implements OnInit {
  @Input() recipeDetail: RecipesItem;

  @Output() onDeleteRecipe: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteRecipe(id: number) {
    this.onDeleteRecipe.emit(id);
  }
}
