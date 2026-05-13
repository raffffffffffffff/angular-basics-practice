export type RecipeCategory =
  | "завтрак"
  | "горячее"
  | "десерт"
  | "напиток"
  | "суп"
  | "закуска";
export type RecipeDifficulty = "легко" | "средне" | "сложно";

export interface Recipe {
  id: number;
  name: string;
  image: string;
  description: string;
  category: RecipeCategory;
  cookingTimeMinutes: number;
  difficulty: RecipeDifficulty;
  servings: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
  isVegetarian: boolean;
}
