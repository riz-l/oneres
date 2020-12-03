// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  margin: 1rem 0;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;

  & i {
    color: #3a3a40;
    font-size: 1.6rem;
    margin-right: 10px;
  }

  & h2 {
    color: #3a3a40;
    font-size: 1.6rem;
  }
`;
