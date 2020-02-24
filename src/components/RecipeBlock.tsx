import React from 'react';
import { Recipe, RecipeCategory, RecipeType } from '../models';
import styled from 'styled-components';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';
import { Label } from './shared/Label';

type Props = {
  recipe: Recipe;
};

export const RecipeBlock: React.FC<Props> = ({ recipe }) => {
  return (
    <Container>
      <GridContainer alignItems="baseline">
        <GridColumn>
          <Title>{recipe.name}</Title>
        </GridColumn>
        <GridColumn align="right">{recipe.time} min</GridColumn>
      </GridContainer>

      <GridContainer columnGap="sm">
        {recipe.category.map(c => (
          <GridColumn>
            <CategoryLabel type={c}>{c}</CategoryLabel>
          </GridColumn>
        ))}
        {recipe.type.map(t => (
          <GridColumn>
            <TypeLabel type={t}>{t}</TypeLabel>
          </GridColumn>
        ))}
      </GridContainer>

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
  margin: `0 0 ${theme.grid.lg}px 0`,
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

const CategoryLabel = styled(Label)<{ type: RecipeCategory }>`
  background: ${props => {
    switch (props.type) {
      case 'breakfast':
        return 'yellow';
      case 'dessert':
        return 'pink';
      case 'dinner':
        return 'darkgreen';
      case 'lunch':
        return 'orange';
      case 'sidedish':
        return 'lightblue';
      case 'starter':
        return 'beige';
      default:
        return 'pink';
    }
  }};
`;
const TypeLabel = styled(Label)<{ type: RecipeType }>`
  background: ${props => {
    switch (props.type) {
      case 'fish':
        return 'blue';
      case 'meat':
        return 'red';
      case 'soup':
        return 'brown';
      case 'sweet':
        return 'purple';
      case 'vegan':
        return 'lightgreen';
      case 'vegetarian':
        return 'green';
      default:
        return 'none';
    }
  }};
`;
