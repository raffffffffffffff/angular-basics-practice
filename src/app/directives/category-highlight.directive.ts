import { Directive, ElementRef, Renderer2, effect, input } from "@angular/core";

import { RecipeCategory } from "../models/recipe.model";

const CATEGORY_COLORS: Record<RecipeCategory, string> = {
  завтрак: "#fff3bf",
  горячее: "#ffe0e0",
  десерт: "#f3d9fa",
  напиток: "#d0ebff",
  суп: "#d3f9d8",
  закуска: "#e5dbff",
};

@Directive({
  selector: "[appCategoryHighlight]",
})
export class CategoryHighlightDirective {
  readonly appCategoryHighlight = input.required<RecipeCategory>();

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {
    effect(() => {
      const category = this.appCategoryHighlight();
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        "backgroundColor",
        CATEGORY_COLORS[category],
      );
    });
  }
}
