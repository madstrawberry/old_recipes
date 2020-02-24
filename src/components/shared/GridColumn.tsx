import styled, { css } from 'styled-components';
import { fromDevice } from '../../styles/mediaQueries';

type GridColumnProps = { width?: number | 'auto' | number[]; align?: 'right' | 'left' };

export const GridColumn = styled.div<GridColumnProps>`
  ${props => !props.align && props.width && flexWidth};
  ${props => props.align === 'left' && alignLeft};
  ${props => props.align === 'right' && alignRight};
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
