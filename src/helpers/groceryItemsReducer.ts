import { GroceryListItems, GroceryItemID, Ingredient } from '../models';
import { v4 as uuid } from 'uuid';

export type GroceryListAction =
  | { type: 'REPLACE_LIST'; payload: GroceryListItems | null }
  | { type: 'ADD_ITEMS'; payload: Ingredient[] }
  | { type: 'TOGGLE_CHECK_ITEM'; payload: GroceryItemID };

export type GroceryListState = {
  items: GroceryListItems;
};

export type GroceryListReducer = (
  state: GroceryListState,
  action: GroceryListAction
) => GroceryListState;

export const groceryListReducer: GroceryListReducer = (state, action) => {
  switch (action.type) {
    case 'REPLACE_LIST': {
      if (!action.payload) {
        return state;
      }

      return {
        items: action.payload,
      };
    }
    case 'ADD_ITEMS': {
      return {
        items: {
          ...state.items,
          ...ingredientsToGroceryItems(action.payload),
        },
      };
    }
    case 'TOGGLE_CHECK_ITEM': {
      const itemFromId = getGroceryItemById(state.items, action.payload);

      if (!itemFromId) return state;

      return {
        items: {
          ...state.items,
          [action.payload]: {
            ...itemFromId,
            isChecked: !itemFromId.isChecked,
          },
        },
      };
    }
    default:
      return state;
  }
};

function ingredientsToGroceryItems(ingredients: Ingredient[]): GroceryListItems {
  return ingredients.reduce<GroceryListItems>(
    (prev, next) => ({ ...prev, ...ingredientToGroceryItem(next) }),
    {}
  );
}

function ingredientToGroceryItem(ingredient: Ingredient): GroceryListItems {
  return { [uuid()]: { isChecked: false, ...ingredient } };
}

function getGroceryItemById(groceryItems: GroceryListItems, id: GroceryItemID) {
  const foundId = Object.keys(groceryItems).find((i) => i === id);
  const foundItem = foundId ? groceryItems[foundId] : null;
  return foundItem;
}

export function saveIngredientsInLocalStorage(items: GroceryListItems) {
  localStorage.setItem('RECIPE_GROCERY_LIST', JSON.stringify(items));
}

export function getIngredientsFromLocalStorage(): GroceryListItems | null {
  const items = localStorage.getItem('RECIPE_GROCERY_LIST');
  return items ? (JSON.parse(items) as GroceryListItems) : null;
}
