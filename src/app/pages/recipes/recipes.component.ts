import { Component, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { EmptyStateComponent } from "../../components/empty-state/empty-state.component";
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";
import { RECIPES } from "../../data/recipes";
import { Recipe, RecipeCategory } from "../../models/recipe.model";

@Component({
  selector: "app-recipes",
  imports: [FormsModule, RecipeCardComponent, EmptyStateComponent],
  templateUrl: "./recipes.component.html",
  styleUrl: "./recipes.component.css",
})
export class RecipesComponent {
  readonly recipes = RECIPES;
  readonly categories: Array<RecipeCategory | "all"> = [
    "all",
    "завтрак",
    "горячее",
    "десерт",
    "напиток",
    "суп",
    "закуска",
  ];
  readonly favoriteRecipeNames = signal<string[]>([]);

  searchTerm = "";
  categoryFilter: RecipeCategory | "all" = "all";
  maxCookingTime = 60;

  get filteredRecipes(): Recipe[] {
    const normalizedTerm = this.searchTerm.trim().toLowerCase();

    return this.recipes.filter((recipe) => {
      const matchesName = recipe.name.toLowerCase().includes(normalizedTerm);
      const matchesCategory =
        this.categoryFilter === "all" ||
        recipe.category === this.categoryFilter;
      const matchesTime = recipe.cookingTimeMinutes <= this.maxCookingTime;

      return matchesName && matchesCategory && matchesTime;
    });
  }

  addToFavorites(recipe: Recipe): void {
    this.favoriteRecipeNames.update((names) =>
      names.includes(recipe.name) ? names : [...names, recipe.name],
    );
  }

  resetFilters(): void {
    this.searchTerm = "";
    this.categoryFilter = "all";
    this.maxCookingTime = 60;
  }
}
