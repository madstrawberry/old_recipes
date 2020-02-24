import styled, { css } from 'styled-components';
import { GridColumn } from './GridColumn';
import { GridSize } from '../../styles/theme';
import { gridInPx } from '../../styles/themeHelpers';

type GridContainerProps = {
  alignItems?: 'center' | 'baseline';
  columnGap?: GridSize;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => props.columnGap && columnGap};
`;

const columnGap = css<GridContainerProps>`
  > ${GridColumn} + ${GridColumn} {
    margin-left: ${props => gridInPx(props, props.columnGap!)};
  }
`;
