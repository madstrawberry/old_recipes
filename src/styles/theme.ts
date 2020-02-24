import styled, { CreateStyled } from '@emotion/styled';

export const theme = {
  palette: {
    primary: '#222',
    secondary: '#444',
    background: '#f1f1f1',
  },
  grid: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
};

export type Theme = typeof theme;

export default styled as CreateStyled<Theme>;
