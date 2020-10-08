import { Recipe } from '../models';

export type GroceryListAction =
  | { type: 'REPLACE_LIST'; payload: GroceryListState | null }
  | { type: 'ADD_RECIPE'; payload: Recipe }
  | { type: 'TOGGLE_CHECK_ITEM'; payload: { recipeId: Recipe['id']; itemIndex: number } };

export type GroceryListState = {
  recipes: Recipe[];
  checked: { [recipeId: string]: number[] };
};

export type GroceryListReducer = (
  state: GroceryListState,
  action: GroceryListAction
) => GroceryListState;

export const groceryListReducer: GroceryListReducer = (state, action) => {
  switch (action.type) {
    case 'REPLACE_LIST': {
      if (!action.payload) return state;

      return action.payload;
    }
    case 'ADD_RECIPE': {
      const isRecipeAlreadyInList = state.recipes
        .map(recipe => recipe.id)
        .includes(action.payload.id);

      if (isRecipeAlreadyInList) return state;

      return {
        ...state,
        recipes: state.recipes.concat(action.payload),
      };
    }
    case 'TOGGLE_CHECK_ITEM': {
      const { recipeId, itemIndex } = action.payload;

      const currentChecked = state.checked[recipeId] ?? [];

      const updatedChecked = currentChecked.includes(itemIndex)
        ? currentChecked.filter(i => i !== itemIndex)
        : currentChecked.concat(itemIndex);

      return {
        ...state,
        checked: {
          ...state.checked,
          [recipeId]: updatedChecked,
        },
      };
    }
    default:
      return state;
  }
};

const GROCERY_LIST_NAME = 'RECIPE_GROCERY_LIST';

export function saveIngredientsInLocalStorage(state: GroceryListState) {
  localStorage.setItem(GROCERY_LIST_NAME, JSON.stringify(state));
}

export function getIngredientsFromLocalStorage(): GroceryListState | null {
  const state = localStorage.getItem(GROCERY_LIST_NAME);

  if (!state) return null;

  const parsedState = JSON.parse(state);

  if (typeof parsedState === 'object' && 'checked' in parsedState && 'recipes' in parsedState) {
    // assume we have a correct state here
    return parsedState;
  }

  // the state is faulty, so clear it
  localStorage.removeItem(GROCERY_LIST_NAME);

  return null;
}
