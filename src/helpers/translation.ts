import { RecipeCategory, RecipeType } from '../models';

export function translateType(type: RecipeType) {
  switch (type) {
    case RecipeType.fish:
      return 'Vis';
    case RecipeType.meat:
      return 'Vlees';
    case RecipeType.soup:
      return 'Soep';
    case RecipeType.sweet:
      return 'Zoet';
    case RecipeType.vegan:
      return 'Vegan';
    case RecipeType.vegetarian:
      return 'Vegetarisch';
    default:
      return type;
  }
}

export function translateCategory(type: RecipeCategory) {
  switch (type) {
    case RecipeCategory.breakfast:
      return 'Ontbijt';
    case RecipeCategory.dessert:
      return 'Nagerecht';
    case RecipeCategory.dinner:
      return 'Hoofdgerecht';
    case RecipeCategory.lunch:
      return 'Lunch';
    case RecipeCategory.sidedish:
      return 'Bijgerecht';
    case RecipeCategory.starter:
      return 'Voorgerecht';
    default:
      return type;
  }
}
