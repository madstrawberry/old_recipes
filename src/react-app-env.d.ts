/// <reference types="react-scripts" />

import 'styled-components';
import { Theme } from './styles/theme';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
