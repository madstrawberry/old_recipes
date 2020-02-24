import styled from 'styled-components';

export const GridContainer = styled.div(() => ({ display: 'flex' }));

type GridColumnProps = { width?: number };

export const GridColumn = styled.div<GridColumnProps>(({ width }) => ({
  flex: width ? `1 0 ${width}%` : '1 0 auto',
}));
