import React from 'react';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';
import { Ingredient } from '../models';

type Props = {
  items: Ingredient[];
};

export const List: React.FC<Props> = ({ items }) => {
  return (
    <>
      <GridContainer top={'lg'}>
        <ul>
          <GridColumn>
            {items.map((i, index) => (
              <li key={index}>{i.name}</li>
            ))}
          </GridColumn>
        </ul>
      </GridContainer>
    </>
  );
};
