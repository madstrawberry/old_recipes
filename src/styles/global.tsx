import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.palette.background};
    margin: 0;
    padding: 0;
    font-family: 'Simonetta', 'Helvetica Neue', 'Arial';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
`;
