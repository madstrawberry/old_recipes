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
  gridInPx: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },
};

export type GridSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Theme = typeof theme;
