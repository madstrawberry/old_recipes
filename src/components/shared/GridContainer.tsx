import styled, { css } from 'styled-components';
import { GridColumn } from './GridColumn';
import { GridSize } from '../../styles/theme';
import { gridInPx, grid } from '../../styles/themeHelpers';
import { fromDevice } from '../../styles/mediaQueries';

type GridContainerProps = {
  alignItems?: 'center' | 'baseline';
  columnGap?: GridSize | GridSize[];
  top?: GridSize;
};

export const GridContainer = styled.div<GridContainerProps>`
  display: flex;
  flex-wrap: wrap;
  ${props => props.alignItems && `align-items: ${props.alignItems}`};
  ${props => columnGapDefault(getDefaultGap(props.columnGap))};
  ${props => columnGapResponsive(getResponsiveGaps(props.columnGap))};
  ${props => marginTopDefault(props.top, getDefaultGap(props.columnGap))};
  ${props => marginTopResponsive(props.top, getResponsiveGaps(props.columnGap))};
`;

function getDefaultGap(columnGap?: GridContainerProps['columnGap']): GridSize | undefined {
  if (!columnGap) return undefined;
  if (!Array.isArray(columnGap)) return columnGap;
  if (Array.isArray(columnGap)) return columnGap[0];
}

function getResponsiveGaps(columnGap?: GridContainerProps['columnGap']): GridSize[] | undefined {
  if (!columnGap || !Array.isArray(columnGap) || columnGap.length === 1) return undefined;
  return columnGap;
}

const marginTopDefault = (top?: GridSize, columnGap?: GridSize) => {
  if (!top && !columnGap) return;

  return css<GridContainerProps>`
    margin-top: ${props => {
      const topSize = top ? grid(props, top) : 0;
      const gapSize = columnGap ? grid(props, columnGap) : 0;

      return `${topSize - gapSize}px`;
    }};
  `;
};

const marginTopResponsive = (top?: GridSize, columnGaps?: GridSize[]) => {
  if (!columnGaps) return;

  return css<GridContainerProps>`
    ${props =>
      columnGaps.slice(1).map((gap, index) => {
        const topSize = top ? grid(props, top) : 0;
        const gapSize = grid(props, gap);

        return `${Object.values(fromDevice)[index]} {
            margin-top: ${topSize - gapSize}px;  
          }`;
      })}
  `;
};

const columnGapDefault = (columnGap?: GridSize) => {
  if (!columnGap) return;

  return css<GridContainerProps>`
    margin-left: -${props => grid(props, columnGap) / 2}px;
    margin-right: -${props => grid(props, columnGap) / 2}px;

    > ${GridColumn} {
      padding-left: ${props => grid(props, columnGap) / 2}px;
      padding-right: ${props => grid(props, columnGap) / 2}px;
      margin-top: ${props => gridInPx(props, columnGap)};
    }
  `;
};

const columnGapResponsive = (columnGaps?: GridSize[]) => {
  if (!columnGaps) return;

  return css<GridContainerProps>`
    ${props =>
      columnGaps.slice(1).map(
        (gap, index) =>
          `${Object.values(fromDevice)[index]} {
          margin-left: -${grid(props, gap) / 2}px;
          margin-right: -${grid(props, gap) / 2}px;
        
          > ${GridColumn} {
            padding-left: ${grid(props, gap) / 2}px;
            padding-right: ${grid(props, gap) / 2}px;
            margin-top: ${gridInPx(props, gap)};
          }
        }
        `
      )}
  `;
};
