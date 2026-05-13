import { Component, input } from "@angular/core";

@Component({
  selector: "app-recipe-stat",
  templateUrl: "./recipe-stat.component.html",
  styleUrl: "./recipe-stat.component.css",
})
export class RecipeStatComponent {
  readonly label = input.required<string>();
  readonly value = input.required<string | number>();
}
