import { Component, OnInit } from "@angular/core";
import { RecipesItem } from "./recipes-list.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.css"]
})
export class RecipesListComponent implements OnInit {
  recipesList: RecipesItem[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.recipesList.push(
        new RecipesItem(
          `Recipes ${i + 1}`,
          "Some quick example text to build on the card title and make up the bulk of the cards content.",
          "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
        )
      );
    }
  }

  ngOnInit() {}
}
