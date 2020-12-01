// Import: Dependencies
import styled from "styled-components";

// Element: Container
export const Container = styled.div`
  background: #3a3a40;
  color: #f1f1f1;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  top: 0;
  transform: translateX(0%);
  transition: transform 100ms linear;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background: #3a3a40;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  -webkit-position: sticky;
  text-align: left;
  top: 0;
  width: 100%;
  z-index: 2;
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0.6rem 0;

  & svg {
    fill: #f1f1f1;
    height: 25px;
    margin-right: 8px;
    width: 25px;
  }

  & h2 {
    color: #f1f1f1;
    font-size: 1.3rem;
    font-weight: 400;

    @media screen and (max-width: 327px) {
      font-size: 1.2rem;
    }
  }
`;

// Element: ListCount
export const ListCount = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

// Element: Loading
export const Loading = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding: 2rem 0.4rem;

  & p {
    font-size: 2rem;
  }
`;
