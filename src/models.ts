type RecipeType = 'vegetarian' | 'vegan' | 'meat' | 'fish' | 'sweet' | 'soup';

type RecipeCategory = 'breakfast' | 'dinner' | 'lunch' | 'dessert' | 'starter' | 'sidedish';

type Unit = 'ts' | 'tbs' | 'ml' | 'l' | 'gr' | 'kg' | 'pc';

export type Recipe = {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  time: number;
  category: RecipeCategory[];
  type: RecipeType[];
};

export type Ingredient = {
  name: string;
  amount: number;
  unit: Unit;
};
