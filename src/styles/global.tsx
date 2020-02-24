import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  
  body {
    background: ${props => props.theme.palette.background};
    padding: 0;
    font-family: 'Simonetta', 'Helvetica Neue', 'Arial';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`;
