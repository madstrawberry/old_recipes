import React, { useState, useEffect, useReducer } from 'react';

import { Recipe, Ingredient } from '../models';
import { recipeData } from '../mockData/data';
import { RecipeBlock } from './RecipeBlock';
import { delay } from '../helpers/delay';
import { FilterReducer, filterReducer } from '../helpers/filterReducer';
import { Filter } from './Filters';
import { getSortedRecipes } from '../helpers/filterRecipes';
import { Menu } from './Menu';
import { Dialog } from './shared/Dialog';
import styled from 'styled-components';
import { List } from './List';

export type Tab = 'filters' | 'list' | 'none';

const App: React.FC = () => {
  const [isLoading, setIsloading] = useState(true);
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [filters, sendFilter] = useReducer<FilterReducer>(filterReducer, {
    order: 'asc',
    ingredients: [],
  });
  const [activeTab, setActiveTab] = useState<Tab>('none');
  const [items, setItems] = useState<Ingredient[]>([]);

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
  const closeDialog = () => setActiveTab('none');
  const addToList = (newItems: Ingredient[]) => {
    setItems([...items, ...newItems]);
  };

  return (
    <AppContainer>
      <Menu activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'filters' && (
        <Dialog title={'Filters'} onClose={closeDialog}>
          <Filter filters={filters} sendFilter={sendFilter} closeDialog={closeDialog} />
        </Dialog>
      )}
      {activeTab === 'list' && (
        <Dialog title={'Boodschappenlijst'} onClose={closeDialog}>
          <List items={items} />
        </Dialog>
      )}
      {filteredRecipes.map(r => (
        <RecipeBlock recipe={r} key={r.id} addToList={addToList} />
      ))}
    </AppContainer>
  );
};

const AppContainer = styled.div`
  padding: ${props => props.theme.gridInPx.lg};
`;

export default App;
