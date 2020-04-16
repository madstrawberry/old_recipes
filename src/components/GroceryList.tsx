import React from 'react';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';
import { GroceryListItems } from '../models';
import styled from 'styled-components';
import { GroceryListAction } from '../helpers/groceryItemsReducer';

type Props = {
  items: GroceryListItems;
  updateGroceryList: React.Dispatch<GroceryListAction>;
};

export const GroceryList: React.FC<Props> = ({ items, updateGroceryList }) => {
  return (
    <GridContainer top={'lg'}>
      <GridColumn>
        <ul>
          {Object.keys(items).map((id) => {
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
  margin-top: ${(p) => p.theme.gridInPx.sm};
`;
