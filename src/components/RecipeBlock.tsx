import React from 'react';
import { Recipe } from '../models';
import styled from 'styled-components';
import { GridContainer, GridColumn } from './shared/Grid';

type Props = {
  recipe: Recipe;
};

export const RecipeBlock: React.FC<Props> = ({ recipe }) => {
  return (
    <Container>
      <Title>
        {recipe.name}
        <span>{recipe.time} min</span>
      </Title>
      <GridContainer>
        <GridColumn width={60}>{recipe.description}</GridColumn>
        <GridColumn>
          <ul>
            {recipe.ingredients.map(ingredient => (
              <li>{ingredient.name}</li>
            ))}
          </ul>
        </GridColumn>
      </GridContainer>
    </Container>
  );
};

const Container = styled.div(({ theme: { grid } }) => ({
  background: '#f1f1f1',
  margin: '0 auto',
  padding: grid.md,
  paddingLeft: grid.lg,
  paddingRight: grid.lg,
  borderRadius: 3,
  marginTop: grid.lg,
  width: '60%',
  boxShadow: '1px 1px 2px 1px rgba(0,0,0,0.1)',
}));

const Title = styled.h2(({ theme }) => ({
  fontSize: 28,
  fontWeight: theme.font.bold,
  display: 'flex',
  alignItems: 'baseline',
  '> span': {
    fontSize: 14,
    marginLeft: 'auto',
    fontWeight: theme.font.default,
  },
}));
