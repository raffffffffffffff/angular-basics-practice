import { Routes } from "@angular/router";

import { AboutComponent } from "./pages/about/about.component";
import { HomeComponent } from "./pages/home/home.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { RecipeDetailsComponent } from "./pages/recipe-details/recipe-details.component";
import { RecipesComponent } from "./pages/recipes/recipes.component";

export const routes: Routes = [
  { path: "", component: HomeComponent, title: "Главная | Книга рецептов" },
  {
    path: "recipes",
    component: RecipesComponent,
    title: "Рецепты | Книга рецептов",
  },
  {
    path: "recipes/:id",
    component: RecipeDetailsComponent,
    title: "Рецепт | Книга рецептов",
  },
  {
    path: "about",
    component: AboutComponent,
    title: "О проекте | Книга рецептов",
  },
  { path: "**", component: NotFoundComponent, title: "404 | Книга рецептов" },
];
