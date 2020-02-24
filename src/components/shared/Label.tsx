import styled from 'styled-components';

export const Label = styled.div<{ type: string }>`
  padding: 3px;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: ${props => props.theme.font.bold};
  color: #fff;
  border-radius: 3px;
  background: pink;

  & + & {
    margin-left: ${props => props.theme.grid.sm}px;
  }
`;
