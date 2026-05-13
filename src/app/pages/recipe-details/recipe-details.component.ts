import { Component, computed, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CategoryHighlightDirective } from "../../directives/category-highlight.directive";
import { RECIPES } from "../../data/recipes";
import { RecipeTimePipe } from "../../pipes/recipe-time.pipe";
import { RecipeStatComponent } from "../../components/recipe-stat/recipe-stat.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-recipe-details",
  imports: [
    RouterLink,
    CategoryHighlightDirective,
    RecipeTimePipe,
    RecipeStatComponent,
  ],
  templateUrl: "./recipe-details.component.html",
  styleUrl: "./recipe-details.component.css",
})
export class RecipeDetailsComponent {
  private readonly route = inject(ActivatedRoute);

  readonly recipe = computed(() => {
    const recipeId = Number(this.route.snapshot.paramMap.get("id"));
    return RECIPES.find((recipe) => recipe.id === recipeId);
  });
}
