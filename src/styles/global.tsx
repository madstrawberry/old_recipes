import { Global } from '@emotion/core';
import React from 'react';
import { Theme } from './theme';

type Props = {
  theme: Theme;
};

export const GlobalStyles: React.FC<Props> = ({ theme }) => (
  <Global
    styles={{
      body: {
        margin: 0,
        padding: 0,
        background: theme.palette.background,
        fontFamily: "'Simonetta','Fira Sans', 'Droid Sans', 'Helvetica Neue'",
        ' -webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
    }}
  />
);
