import React, { useState } from 'react';
import { FilterState, FilterAction } from '../helpers/filterReducer';
import styled from 'styled-components';
import { RecipeType, RecipeCategory } from '../models';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';
import AddIcon from '@material-ui/icons/Add';

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
    closeDialog();
  };

  return (
    <GridContainer top="lg">
      <GridColumn>
        <GridContainer columnGap={'sm'}>
          <GridColumn width={[50, 30]}>
            <ButtonFullWidth
              isActive={filters.order === 'asc'}
              onClick={() => sendFilter({ type: 'ORDER_ASC' })}
            >
              Oplopend
            </ButtonFullWidth>
          </GridColumn>
          <GridColumn width={[50, 30]}>
            <ButtonFullWidth
              isActive={filters.order === 'desc'}
              onClick={() => sendFilter({ type: 'ORDER_DESC' })}
            >
              Aflopend
            </ButtonFullWidth>
          </GridColumn>
        </GridContainer>

        <GridContainer top={'lg'}>
          <GridColumn width={100}>
            Ingredienten:
            <GridContainer columnGap={'sm'} top={'sm'}>
              <GridColumn width={'auto'} height={'40px'}>
                <InputField
                  onKeyDown={e => e.key === 'Enter' && updateIngredientFilter()}
                  type="text"
                  id="ingredient"
                  onChange={e => setIngredient(e.target.value)}
                  value={ingredient}
                />
              </GridColumn>

              <GridColumn width={'30px'} height={'40px'}>
                <IconButtonFullWidth onClick={updateIngredientFilter}>
                  <AddIcon />
                </IconButtonFullWidth>
              </GridColumn>
            </GridContainer>
            {!!filters.ingredients.length && (
              <GridContainer columnGap={'sm'} top={'sm'}>
                {filters.ingredients.map((ingredient, i) => (
                  <GridColumn key={i}>
                    <Ingredient
                      onClick={() => sendFilter({ type: 'REMOVE_INGREDIENT', payload: ingredient })}
                    >
                      {ingredient}
                    </Ingredient>
                  </GridColumn>
                ))}
              </GridContainer>
            )}
          </GridColumn>
        </GridContainer>

        <GridContainer top={'lg'}>
          Type:
          <GridContainer columnGap={'sm'} top={'sm'}>
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
        </GridContainer>

        <GridContainer top={'lg'}>
          Categorie:
          <GridContainer columnGap={'sm'} top={'sm'}>
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
        </GridContainer>

        <GridContainer columnGap={'sm'} top={'xl'}>
          <GridColumn width={100}>
            <MainButtonFullWidth onClick={closeDialog}>Toon recepten</MainButtonFullWidth>
          </GridColumn>
        </GridContainer>

        <GridContainer top={'xs'}>
          <GridColumn align="right">
            <TextButton onClick={clearFilters}>Verwijder filters</TextButton>
          </GridColumn>
        </GridContainer>
      </GridColumn>
    </GridContainer>
  );
};

const Ingredient = styled.span`
  display: inline-block;
  background: #ddd;
  border-radius: 3px;
  border: 1px solid #aaa;
  padding: 2px;
`;

const TypeBtn = styled.button<{ isActive?: boolean }>`
  border: 1px solid #aaa;
  border-radius: 3px;
  background: ${props => (props.isActive ? 'pink' : 'transparent')};
`;

type ButtonProps = {
  isActive?: boolean;
};

const ButtonFullWidth = styled.button<ButtonProps>`
  width: 100%;
  border: 1px solid #ccc;
  padding: ${props => props.theme.gridInPx.sm};
  text-align: center;
  background-color: ${props => (props.isActive ? '#ccc' : 'initial')};
`;

const MainButtonFullWidth = styled(ButtonFullWidth)<ButtonProps>`
  background-color: #ccc;
  font-weight: bold;
  border: 2px solid #aaa;
  padding: ${props => props.theme.gridInPx.md};
  border-radius: 3px;
`;

const InputField = styled.input`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
  padding: ${props => props.theme.gridInPx.sm};
`;

const IconButtonFullWidth = styled(ButtonFullWidth)`
  padding: 5px 0 1px;
  height: 100%;
`;

const TextButton = styled.button`
  border: 0;
  background: none;
`;
