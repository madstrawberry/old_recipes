import styled from 'styled-components';
import { fromDevice } from '../../styles/mediaQueries';

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: ${props => props.theme.gridInPx.lg};

  ${fromDevice.md} {
    width: 75%;
  }

  ${fromDevice.lg} {
    width: 60%;
  }
`;
