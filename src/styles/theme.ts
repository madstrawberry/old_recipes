import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
  colors: {
    main: string;
  };
};

export const theme: Theme = {
  colors: {
    main: '#111',
  },
};

export default styled as CreateStyled<Theme>;
