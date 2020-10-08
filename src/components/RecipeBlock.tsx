import { Ingredient, Recipe, RecipeCategory, RecipeType } from '../models';
import { translateCategory, translateType } from '../helpers/translation';

import { Container } from './shared/Container';
import { GridColumn } from './shared/GridColumn';
import { GridContainer } from './shared/GridContainer';
import { Label } from './shared/Label';
import React from 'react';
import styled from 'styled-components';

type Props = {
  recipe: Recipe;
  addToList: (items: Ingredient[]) => void;
};

export const RecipeBlock: React.FC<Props> = ({ recipe, addToList }) => {
  return (
    <StyledContainer>
      <GridContainer alignItems="baseline" columnGap="sm">
        <GridColumn width={75}>
          <Title>{recipe.name}</Title>
        </GridColumn>
        <GridColumn align="right">{recipe.time} min</GridColumn>
      </GridContainer>

      <GridContainer columnGap="sm" top="lg">
        {recipe.category.map((c, i) => (
          <GridColumn key={i}>
            <CategoryLabel type={c}>{translateCategory(c)}</CategoryLabel>
          </GridColumn>
        ))}
        {recipe.type.map((t, i) => (
          <GridColumn key={i}>
            <TypeLabel type={t}>{translateType(t)}</TypeLabel>
          </GridColumn>
        ))}
      </GridContainer>

      <GridContainer top="lg" columnGap={['lg', 'md']}>
        <GridColumn width={[100, 40]}>
          <ul>
            {recipe.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient.name}</li>
            ))}
          </ul>
        </GridColumn>
        <GridColumn width={[100, 60]}>{recipe.description}</GridColumn>
      </GridContainer>

      <GridContainer top="lg">
        <GridColumn width={100}>
          <AddButton onClick={() => addToList(recipe.ingredients)}>
            Voeg toe aan boodschappenlijst
          </AddButton>
        </GridColumn>
      </GridContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin: 0 auto;
  background: #f1f1f1;
  padding: ${props => props.theme.grid.lg}px;
  margin-top: ${props => props.theme.grid.lg}px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 28px;
  font-weight: ${props => props.theme.font.bold};
`;

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

const AddButton = styled.button`
  width: 100%;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 3px;
`;
