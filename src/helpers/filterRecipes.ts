import { Recipe, RecipeCategory, RecipeType } from '../models';
import { FilterState } from './filterReducer';

export function getSortedRecipes(recipes: Recipe[], filterState: FilterState) {
  return recipes
    .filter(category(filterState.category))
    .filter(type(filterState.type))
    .filter(ingredients(filterState.ingredients))
    .sort(orderType(filterState.order));
}

const category = (category?: RecipeCategory) => (recipe: Recipe) =>
  !category ? true : recipe.category.includes(category);

const type = (type?: RecipeType) => (recipe: Recipe) => (!type ? true : recipe.type.includes(type));

const ingredients = (ingredients: string[]) => (recipe: Recipe) =>
  !ingredients.length
    ? recipe
    : ingredients.every(i => recipe.ingredients.some(ri => ri.name.includes(i)));

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
