import styled from 'styled-components';
import React from 'react';

import { RecipeType, RecipeCategory } from '../../models';

type TypeButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: RecipeType;
};

export const TypeButton: React.FC<TypeButtonProps> = ({ children, isActive, onClick }) => {
  return (
    <StyledTypeBtn isActive={isActive} onClick={onClick}>
      {translateType(children)}
    </StyledTypeBtn>
  );
};

type CategoryButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: RecipeCategory;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({ children, isActive, onClick }) => {
  return (
    <StyledTypeBtn isActive={isActive} onClick={onClick}>
      {translateCategory(children)}
    </StyledTypeBtn>
  );
};

function translateType(type: RecipeType) {
  switch (type) {
    case RecipeType.fish:
      return 'Vis';
    case RecipeType.meat:
      return 'Vlees';
    case RecipeType.soup:
      return 'Soep';
    case RecipeType.sweet:
      return 'Zoet';
    case RecipeType.vegan:
      return 'Vegan';
    case RecipeType.vegetarian:
      return 'Vegetarisch';
    default:
      return type;
  }
}

function translateCategory(type: RecipeCategory) {
  switch (type) {
    case RecipeCategory.breakfast:
      return 'Ontbijt';
    case RecipeCategory.dessert:
      return 'Nagerecht';
    case RecipeCategory.dinner:
      return 'Hoofdgerecht';
    case RecipeCategory.lunch:
      return 'Lunch';
    case RecipeCategory.sidedish:
      return 'Bijgerecht';
    case RecipeCategory.starter:
      return 'Voorgerecht';
    default:
      return type;
  }
}

const StyledTypeBtn = styled.button<{ isActive?: boolean }>`
  border: 1px solid #aaa;
  border-radius: 3px;
  background: ${props => (props.isActive ? 'pink' : 'transparent')};
`;
