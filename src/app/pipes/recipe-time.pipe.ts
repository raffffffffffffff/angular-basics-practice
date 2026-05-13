import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "recipeTime",
})
export class RecipeTimePipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes < 60) {
      return `${minutes} мин`;
    }

    const hours = Math.floor(minutes / 60);
    const restMinutes = minutes % 60;

    return restMinutes === 0 ? `${hours} ч` : `${hours} ч ${restMinutes} мин`;
  }
}
