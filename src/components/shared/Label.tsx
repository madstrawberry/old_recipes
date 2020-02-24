import styled from 'styled-components';

export const Label = styled.div<{ type: string }>`
  padding: ${props => props.theme.grid.xs}px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: ${props => props.theme.font.bold};
  color: #fff;
  border-radius: 3px;
  background: pink;
`;
