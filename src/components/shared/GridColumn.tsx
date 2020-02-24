import styled, { css } from 'styled-components';
import { fromDevice } from '../../styles/mediaQueries';
import { GridSize } from '../../styles/theme';
import { gridInPx } from '../../styles/themeHelpers';

type GridColumnProps = {
  width?: number | 'auto' | number[];
  align?: 'right' | 'left';
  top?: GridSize | (GridSize | '')[];
};

export const GridColumn = styled.div<GridColumnProps>`
  ${props => !props.align && props.width && flexWidth};
  ${props => props.align === 'left' && alignLeft};
  ${props => props.align === 'right' && alignRight};
  ${props => props.top && marginTop}
`;

const flexWidth = css<GridColumnProps>`
  flex: ${props => {
    if (props.width === 'auto') return '1 0 auto';

    if (typeof props.width === 'number') return `1 0 ${props.width}%`;

    return `1 0 ${props.width![0]}%`;
  }};

  ${props =>
    Array.isArray(props.width!) &&
    props.width.slice(1).map((size, index) => {
      return `${Object.values(fromDevice)[index]} {
        flex: 1 0 ${size}%;
      }`;
    })}
`;

const alignRight = css`
  margin-left: auto;
`;

const alignLeft = css`
  margin-right: auto;
`;

const marginTop = css<GridColumnProps>`
  margin-top: ${props => {
    if (!Array.isArray(props.top!)) return gridInPx(props, props.top!);

    return props.top[0] && gridInPx(props, props.top[0]);
  }};

  ${props =>
    Array.isArray(props.top!) &&
    props.top.slice(1).map((size, index) => {
      return `${Object.values(fromDevice)[index]} {
        margin-top: ${size ? gridInPx(props, size) : 0};
      }`;
    })}
`;
