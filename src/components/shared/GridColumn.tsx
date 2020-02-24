import styled, { css } from 'styled-components';

type GridColumnProps = { width?: number | 'auto'; align?: 'right' | 'left' };

export const GridColumn = styled.div<GridColumnProps>`
  ${props => !props.align && props.width && flexWidth};
  ${props => props.align === 'left' && alignLeft};
  ${props => props.align === 'right' && alignRight};
`;

const flexWidth = css<GridColumnProps>`
  flex: ${props => {
    if (props.width === 'auto') return '1 0 auto';

    return `1 0 ${props.width}%`;
  }};
`;

const alignRight = css`
  margin-left: auto;
`;

const alignLeft = css`
  margin-right: auto;
`;
