import React, { useState } from 'react';
import { FilterState, FilterAction } from '../helpers/filterReducer';
import styled from 'styled-components';
import { RecipeType, RecipeCategory } from '../models';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';

type Props = {
  filters: FilterState;
  sendFilter: React.Dispatch<FilterAction>;
  closeDialog: () => void;
};

export const Filter: React.FC<Props> = ({ filters, sendFilter, closeDialog }) => {
  const [ingredient, setIngredient] = useState<string>('');

  const updateIngredientFilter = () => {
    sendFilter({ type: 'FILTER_INGREDIENTS', payload: ingredient });
    setIngredient('');
  };

  const clearFilters = () => {
    setIngredient('');
    sendFilter({ type: 'CLEAR' });
  };

  return (
    <>
      <button onClick={() => sendFilter({ type: 'ORDER_ASC' })}>Order asc</button>{' '}
      <button onClick={() => sendFilter({ type: 'ORDER_DESC' })}>Order desc</button>
      <br />
      <br />
      Ingredient:{' '}
      <input
        type="text"
        id="ingredient"
        onChange={e => setIngredient(e.target.value)}
        value={ingredient}
      />{' '}
      <button onClick={updateIngredientFilter}>Add</button>{' '}
      {filters.ingredients.map((ingredient, i) => (
        <Ingredient
          key={i}
          onClick={() => sendFilter({ type: 'REMOVE_INGREDIENT', payload: ingredient })}
        >
          {ingredient}
        </Ingredient>
      ))}
      <br />
      <br />
      <GridContainer columnGap={'sm'}>
        {Object.values(RecipeType).map((type, index) => (
          <GridColumn key={index}>
            <TypeBtn
              isActive={type === filters.type}
              onClick={() => sendFilter({ type: 'FILTER_TYPE', payload: type })}
            >
              {type}
            </TypeBtn>
          </GridColumn>
        ))}
      </GridContainer>
      <br />
      <br />
      <GridContainer columnGap={'sm'}>
        {Object.values(RecipeCategory).map((category, index) => (
          <GridColumn key={index}>
            <TypeBtn
              isActive={category === filters.category}
              onClick={() => sendFilter({ type: 'FILTER_CATEGORY', payload: category })}
            >
              {category}
            </TypeBtn>
          </GridColumn>
        ))}
      </GridContainer>
      <br />
      <br />
      <GridContainer columnGap={'sm'}>
        <GridColumn width={50}>
          <ButtonFullWidth onClick={clearFilters}>Verwijder filters</ButtonFullWidth>
        </GridColumn>
        <GridColumn width={50}>
          <ButtonFullWidth onClick={closeDialog}>Zoek recepten</ButtonFullWidth>
        </GridColumn>
      </GridContainer>
    </>
  );
};

const Ingredient = styled.span`
  display: inline-block;
  background: #ddd;
  border-radius: 3px;
  border: 1px solid #aaa;
  padding: 2px;

  & + & {
    margin-left: ${props => props.theme.gridInPx.sm};
  }
`;

const TypeBtn = styled.button<{ isActive?: boolean }>`
  border: 1px solid #aaa;
  border-radius: 3px;
  background: ${props => (props.isActive ? 'pink' : 'transparent')};
`;

const ButtonFullWidth = styled.button`
  width: 100%;
  border: 1px solid #ccc;
  padding: 10px;
`;
