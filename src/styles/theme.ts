import styled, { CreateStyled } from '@emotion/styled';

import { useTheme as useThemeFn } from 'emotion-theming';

export const theme = {
  palette: {
    primary: '#222',
    secondary: '#444',
    background: '#e1e1e1',
  },
  font: {
    bold: 900,
    default: 400,
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

export const useTheme = () => useThemeFn<Theme>();

export default styled as CreateStyled<Theme>;
