import { Component, OnInit, Input } from "@angular/core";
import { RecipesItem } from "../recipes-list.model";

@Component({
  selector: "app-recipes-list-item",
  templateUrl: "./recipes-list-item.component.html",
  styleUrls: ["./recipes-list-item.component.css"]
})
export class RecipesListItemComponent implements OnInit {
  @Input() recipeDetail: RecipesItem;
  constructor() {}

  ngOnInit() {}
}
