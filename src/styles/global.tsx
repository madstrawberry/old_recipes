import { Global } from '@emotion/core';
import React from 'react';

export const GlobalStyles = () => (
  <Global
    styles={{
      body: {
        margin: 0,
        padding: 0,
        fontFamily: "'Roboto','Fira Sans', 'Droid Sans', 'Helvetica Neue'",
        ' -webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
      },
    }}
  />
);
