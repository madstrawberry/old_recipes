import styled from 'styled-components';
import { fromDevice } from '../../styles/mediaQueries';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${fromDevice.md} {
    width: 75%;
  }

  ${fromDevice.lg} {
    width: 60%;
  }
`;
