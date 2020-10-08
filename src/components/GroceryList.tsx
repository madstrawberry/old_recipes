import { GroceryListAction, GroceryListState } from '../helpers/groceryListReducer';

import { GridColumn } from './shared/GridColumn';
import { GridContainer } from './shared/GridContainer';
import React from 'react';
import styled from 'styled-components';

type Props = {
  groceryList: GroceryListState;
  updateGroceryList: React.Dispatch<GroceryListAction>;
};

export const GroceryList: React.FC<Props> = ({ groceryList, updateGroceryList }) => {
  return (
    <GridContainer top={'lg'}>
      <GridColumn>
        <ul>
          {groceryList.recipes.map(recipe => {
            return (
              <Item key={recipe.id}>
                {recipe.name}
                <ul>
                  {recipe.ingredients.map((ingredient, index) => {
                    const isChecked = groceryList.checked[recipe.id]?.includes(index);

                    return (
                      <Item key={index}>
                        <label>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() =>
                              updateGroceryList({
                                type: 'TOGGLE_CHECK_ITEM',
                                payload: { recipeId: recipe.id, itemIndex: index },
                              })
                            }
                          />
                          <span>
                            {ingredient.name} ({ingredient.amount} {ingredient.unit})
                          </span>
                        </label>
                      </Item>
                    );
                  })}
                </ul>
              </Item>
            );
          })}
        </ul>
      </GridColumn>
    </GridContainer>
  );
};

const Item = styled.li`
  margin-top: ${p => p.theme.gridInPx.sm};
  list-style: none;
`;
