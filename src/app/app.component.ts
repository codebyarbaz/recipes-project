import { Component } from "@angular/core";
import { RecipesItem } from "./add-recipe-item/recipeItem.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  recipes: RecipesItem[] = [];

  constructor() {
    // for (let i = 0; i < 3; i++) {
    //   this.recipes.push(
    //     new RecipesItem(
    //       `Recipes ${i + 1}`,
    //       "Some quick example text to build on the card title and make up the bulk of the cards content.",
    //       "https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/caponata-pasta_1.jpg"
    //     )
    //   );
    // }
  }

  addNewRecipe(recipeDetail: RecipesItem) {
    this.recipes.push({ id: this.recipes.length, ...recipeDetail });
  }

  DeleteRecipe(title: string) {
    const itemIndex = this.recipes.findIndex(item => item.title === title);
    if (itemIndex > -1) {
      this.recipes.splice(itemIndex, 1);
    }
  }
}
