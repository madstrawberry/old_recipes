import { GridColumn } from './shared/GridColumn';
import { GridContainer } from './shared/GridContainer';
import { GroceryListAction } from '../helpers/groceryItemsReducer';
import { GroceryListItems } from '../models';
import React from 'react';
import styled from 'styled-components';

type Props = {
  items: GroceryListItems;
  updateGroceryList: React.Dispatch<GroceryListAction>;
};

export const GroceryList: React.FC<Props> = ({ items, updateGroceryList }) => {
  return (
    <GridContainer top={'lg'}>
      <GridColumn>
        <ul>
          {Object.keys(items).map(id => {
            const groceryItem = items[id];

            return (
              <Item key={id}>
                <label>
                  <input
                    type="checkbox"
                    checked={groceryItem.isChecked}
                    onChange={() => updateGroceryList({ type: 'TOGGLE_CHECK_ITEM', payload: id })}
                  />
                  <span>
                    {groceryItem.name} ({groceryItem.amount} {groceryItem.unit})
                  </span>
                </label>
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
`;
