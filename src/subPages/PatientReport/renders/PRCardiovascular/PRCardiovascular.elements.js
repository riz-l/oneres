// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.section`
  background: #ffffff;
  margin-bottom: 1rem;
`;

// Element: Heading
export const Heading = styled.div`
  background: #dfdfe2;
  width: 100%;
`;

// Element: Render
export const Render = styled.div`
  padding: 1rem 0;
`;

// Element: AssessmentGrid
export const AssessmentGrid = styled.div`
  border-top: 1px solid #dfdfe2;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(66px, 1fr));
  height: 100%;
  margin-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;

  &:first-of-type {
    border-top: none;
    padding-top: 0;
    margin-top: 0;
  }
`;

// Element: Grid
export const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  height: 100%;
  width: 100%;
`;

// Element: Column
export const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;
