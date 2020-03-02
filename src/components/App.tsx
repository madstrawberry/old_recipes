import React, { useState, useEffect, useReducer } from 'react';

import { Recipe } from '../models';
import { recipeData } from '../mockData/data';
import { RecipeBlock } from './RecipeBlock';
import { delay } from '../helpers/delay';
import { FilterReducer, filterReducer } from './FilterReducer';
import { Filter } from './Filters';
import { getSortedRecipes } from '../helpers/filterRecipes';

const App: React.FC = () => {
  const [isLoading, setIsloading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filters, sendFilter] = useReducer<FilterReducer>(filterReducer, {
    order: 'asc',
    ingredients: [],
  });

  const loadData = async () => {
    setIsloading(true);
    await delay(2);
    setRecipes(recipeData);
    setIsloading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (isLoading) {
    return <p>loading...</p>;
  }

  if (!recipes.length) {
    return <p>no recipes found...</p>;
  }

  const filteredRecipes = getSortedRecipes(recipes, filters);

  return (
    <>
      <Filter filters={filters} sendFilter={sendFilter} />
      {filteredRecipes.map(r => (
        <RecipeBlock recipe={r} key={r.id} />
      ))}
    </>
  );
};

export default App;
