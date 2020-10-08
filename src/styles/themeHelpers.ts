import { GridSize, Theme } from './theme';

export function gridInPx(props: { theme: Theme }, size: GridSize): string {
  return `${props.theme.grid[size]}px`;
}

export function grid(props: { theme: Theme }, size: GridSize): number {
  return props.theme.grid[size];
}
