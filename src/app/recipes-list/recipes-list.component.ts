import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { RecipesItem } from "../add-recipe-item/recipeItem.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  @Input() recipesList: RecipesItem[] = [];

  @Output() OnDeleteRecipe: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  deleteRecipe(id: number) {
    this.OnDeleteRecipe.emit(id);
  }
}
