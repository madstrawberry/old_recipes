import styled, { css } from 'styled-components';
import { GridColumn } from './GridColumn';
import { GridSize } from '../../styles/theme';
import { gridInPx } from '../../styles/themeHelpers';

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
  margin-left: -${props => gridInPx(props, props.columnGap!)};
  margin-right: -${props => gridInPx(props, props.columnGap!)};

  > ${GridColumn} {
    padding-left: ${props => gridInPx(props, props.columnGap!)};
    padding-right: ${props => gridInPx(props, props.columnGap!)};
  }
`;
