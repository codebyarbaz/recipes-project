import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";
import { RecipesDetailComponent } from "./recipes-detail/recipes-detail.component";
import { RecipesListItemComponent } from "./recipes-list/recipes-list-item/recipes-list-item.component";
import { AddRecipeItemComponent } from "./add-recipe-item/add-recipe-item.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesListItemComponent,
    AddRecipeItemComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
