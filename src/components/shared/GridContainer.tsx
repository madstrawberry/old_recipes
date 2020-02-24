import styled, { css } from 'styled-components';
import { GridColumn } from './GridColumn';
import { GridSize } from '../../styles/theme';
import { gridInPx, grid } from '../../styles/themeHelpers';

type GridContainerProps = {
  alignItems?: 'center' | 'baseline';
  columnGap?: GridSize;
  top?: GridSize;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-wrap: wrap;
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => props.columnGap && columnGap};
  ${props => props.top && `margin-top: ${gridInPx(props, props.top)}`}
`;

const columnGap = css<GridContainerProps>`
  margin-left: -${props => grid(props, props.columnGap!) / 2}px;
  margin-right: -${props => grid(props, props.columnGap!) / 2}px;

  > ${GridColumn} {
    padding-left: ${props => grid(props, props.columnGap!) / 2}px;
    padding-right: ${props => grid(props, props.columnGap!) / 2}px;
  }
`;
