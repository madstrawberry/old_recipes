import { Container } from './shared/Container';
import { GridColumn } from './shared/GridColumn';
import { GridContainer } from './shared/GridContainer';
import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Tab } from './App';
import styled from 'styled-components';

type Props = {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
};

export const Menu: React.FC<Props> = ({ activeTab, setActiveTab }) => {
  const setTab = (tab: 'filters' | 'list') => () => {
    if (activeTab === tab) {
      setActiveTab('none');
      return;
    }

    setActiveTab(tab);
  };

  return (
    <StyledContainer>
      <GridContainer columnGap={'sm'}>
        <GridColumn width={[70]}>
          <MenuButton isActive={activeTab === 'filters'} onClick={setTab('filters')}>
            Filters
          </MenuButton>
        </GridColumn>
        <GridColumn width={[30]}>
          <MenuButton isActive={activeTab === 'list'} onClick={setTab('list')}>
            <ShoppingBasketIcon />
          </MenuButton>
        </GridColumn>
      </GridContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  position: sticky;
  top: 0;
  background: ${props => props.theme.palette.background};
`;

const MenuButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  display: flex;
  border: 0;
  color: #fff;
  font-size: 24px;
  background: #444;
  height: 50px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.1);
  justify-content: center;
`;
