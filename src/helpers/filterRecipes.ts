import { Recipe, RecipeCategory, RecipeType } from '../models';
import { FilterState } from '../components/FilterReducer';

export function getSortedRecipes(recipes: Recipe[], filterState: FilterState) {
  return recipes
    .filter(category(filterState.category))
    .filter(type(filterState.type))
    .filter(ingredient(filterState.ingredient))
    .sort(orderType(filterState.order));
}

const category = (category?: RecipeCategory) => (recipe: Recipe) =>
  !category ? true : recipe.category.includes(category);

const type = (type?: RecipeType) => (recipe: Recipe) => (!type ? true : recipe.type.includes(type));

const ingredient = (ingredient?: string) => (recipe: Recipe) =>
  !ingredient ? recipe : recipe.ingredients.some(i => i.name.includes(ingredient));

const orderType = (order: 'asc' | 'desc') => (order === 'asc' ? sortAsc : sortDesc);

function sortDesc(a: Recipe, b: Recipe) {
  if (a.name > b.name) {
    return -1;
  }

  if (a.name < b.name) {
    return 1;
  }

  return 0;
}

function sortAsc(a: Recipe, b: Recipe) {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
}
