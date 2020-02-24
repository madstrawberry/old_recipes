import { Theme, GridSize } from './theme';

export function gridInPx(props: { theme: Theme }, size: GridSize) {
  return `${props.theme.grid[size]}px`;
}

export function grid(props: { theme: Theme }, size: GridSize) {
  return props.theme.grid[size];
}
