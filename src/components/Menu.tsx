import React from 'react';
import { Tab } from './App';
import { Container } from './shared/Container';
import styled from 'styled-components';
import { GridContainer } from './shared/GridContainer';
import { GridColumn } from './shared/GridColumn';

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
    <Container>
      <GridContainer columnGap={'sm'}>
        <GridColumn width={50}>
          <MenuButton isActive={activeTab === 'filters'} onClick={setTab('filters')}>
            Filters
          </MenuButton>
        </GridColumn>
        <GridColumn width={50}>
          <MenuButton isActive={activeTab === 'list'} onClick={setTab('list')}>
            List
          </MenuButton>
        </GridColumn>
      </GridContainer>
    </Container>
  );
};

const MenuButton = styled.button<{ isActive: boolean }>`
  width: 100%;
  background: ${props => (props.isActive ? 'pink' : 'white')};
`;
