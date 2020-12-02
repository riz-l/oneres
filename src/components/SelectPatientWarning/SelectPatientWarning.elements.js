// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: rgb(255, 99, 71);
  display: flex;
  justify-content: flex-start;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  width: 100%;
  min-width: 100%;

  & svg {
    fill: rgb(126, 24, 24);
    height: 30px;
    margin-right: 1rem;
    width: 30px;
  }

  & span {
    color: rgb(126, 24, 24);
  }
`;
