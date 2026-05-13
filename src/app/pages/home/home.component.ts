import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { RECIPES } from "../../data/recipes";
import { Recipe } from "../../models/recipe.model";

@Component({
  selector: "app-home",
  imports: [RouterLink, RecipeCardComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  readonly featuredRecipes = RECIPES.slice(0, 3);
  favoriteRecipeName = "";

  markFavorite(recipe: Recipe): void {
    this.favoriteRecipeName = recipe.name;
  }
}
