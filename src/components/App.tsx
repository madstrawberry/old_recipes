import React, { useState, useEffect } from 'react';

import { Recipe } from '../models';
import { recipeData } from '../mockData/data';
import { RecipeBlock } from './RecipeBlock';
import { delay } from '../helpers/delay';

const App: React.FC = () => {
  const [isLoading, setIsloading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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

  return (
    <>
      {recipes.map(r => (
        <RecipeBlock recipe={r} />
      ))}
    </>
  );
};

export default App;
