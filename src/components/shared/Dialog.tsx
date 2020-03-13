import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';
import { GridContainer } from './GridContainer';
import { GridColumn } from './GridColumn';

type Props = {
  onClose: () => void;
  title: string;
};

export const Dialog: React.FC<Props> = ({ children, onClose, title }) => {
  return ReactDOM.createPortal(
    <Background>
      <DialogContainer>
        <GridContainer alignItems="center">
          <GridColumn>
            <h2>{title}</h2>
          </GridColumn>
          <GridColumn align="right">
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </GridColumn>
        </GridContainer>

        {children}
      </DialogContainer>
    </Background>,
    document.getElementById('body')!
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DialogContainer = styled.div`
  position: absolute;
  background: #fff;
  top: 25px;
  left: 25px;
  bottom: 25px;
  right: 25px;
  padding: ${props => props.theme.gridInPx.lg};
  border-radius: 3px;
  overflow: auto;
`;

const CloseButton = styled.button`
  border: 0;
  background: none;
`;
