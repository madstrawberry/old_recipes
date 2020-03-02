import React, { useState } from 'react';
import { FilterState, FilterAction } from './FilterReducer';
import styled from 'styled-components';
import { fromDevice } from '../styles/mediaQueries';

type Props = {
  filters: FilterState;
  sendFilter: React.Dispatch<FilterAction>;
};

export const Filter: React.FC<Props> = ({ filters, sendFilter }) => {
  const [ingredient, setIngredient] = useState('');

  const updateIngredientFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setIngredient(value);
    sendFilter({ type: 'FILTER_INGREDIENTS', payload: value });
  };

  const clearFilters = () => {
    setIngredient('');
    sendFilter({ type: 'CLEAR' });
  };

  return (
    <Container>
      <button onClick={() => sendFilter({ type: 'ORDER_ASC' })}>Order asc</button>{' '}
      <button onClick={() => sendFilter({ type: 'ORDER_DESC' })}>Order desc</button>
      <br />
      <br />
      Ingredient: <input type="text" onChange={updateIngredientFilter} value={ingredient} />
      <br />
      <br />
      <button onClick={clearFilters}>Clear filters</button>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: ${props => props.theme.gridInPx.lg};

  ${fromDevice.md} {
    width: 75%;
  }

  ${fromDevice.lg} {
    width: 60%;
  }
`;
