import { Component, input, output } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CategoryHighlightDirective } from "../../directives/category-highlight.directive";
import { Recipe } from "../../models/recipe.model";
import { RecipeTimePipe } from "../../pipes/recipe-time.pipe";
import { RecipeStatComponent } from "../recipe-stat/recipe-stat.component";

@Component({
  selector: "app-recipe-card",
  imports: [
    RouterLink,
    CategoryHighlightDirective,
    RecipeTimePipe,
    RecipeStatComponent,
  ],
  templateUrl: "./recipe-card.component.html",
  styleUrl: "./recipe-card.component.css",
})
export class RecipeCardComponent {
  readonly recipe = input.required<Recipe>();
  readonly selected = output<Recipe>();

  selectRecipe(): void {
    this.selected.emit(this.recipe());
  }
}
