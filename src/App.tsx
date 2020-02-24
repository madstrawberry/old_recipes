import React from 'react';

import styled from './styles/theme';

function App() {
  return (
    <div>
      <Par>Hello world</Par>
    </div>
  );
}

const Par = styled.p(({ theme }) => ({
  color: theme.colors.main,
}));

export default App;
