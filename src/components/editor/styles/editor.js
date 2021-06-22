import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  @media screen and (orientation: landscape) {
    // CSS applied when the device is in landscape mode
  }
`;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div``;
