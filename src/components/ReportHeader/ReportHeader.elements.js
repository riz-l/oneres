// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: #f1f1f1;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0 1rem;
  position: ${({ isPatientListOpen, windowWidth }) => {
    if (!isPatientListOpen || windowWidth > 768) {
      return "sticky";
    } else {
      return "static";
    }
  }};
  -webkit-position: ${({ isPatientListOpen, windowWidth }) => {
    if (!isPatientListOpen || windowWidth > 768) {
      return "sticky";
    } else {
      return "static";
    }
  }};
  top: 0;
  transition: position 100ms linear;
  width: 100%;
  min-width: 100%;
`;

// Element: Navigation
export const Navigation = styled.ul`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: flex-start;
  width: 100%;
  min-width: 100%;

  & a {
    align-items: center;
    border-top: 3px solid transparent;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0.8rem 2rem;

    @media screen and (max-width: 558px) {
      padding: 0.8rem 1.6rem;
    }

    @media screen and (max-width: 480px) {
      padding: 0.8rem 1.2rem;
    }

    @media screen and (max-width: 400px) {
      padding: 0.8rem 1rem;
    }

    @media screen and (max-width: 364px) {
      padding: 0.8rem 0.8rem;
    }

    &:hover {
      & li {
        color: #2c2c2c;
        transition: color 150ms linear;
      }

      & svg {
        fill: #2c2c2c;
        transition: fill 150ms linear;
      }
    }

    & svg {
      fill: #414141;
      height: 40px;
      transition: fill 150ms linear;
      width: 40px;

      @media screen and (max-width: 420px) {
        height: 35px;
        width: 35px;
      }

      @media screen and (max-width: 330px) {
        height: 30px;
        width: 30px;
      }
    }

    & li {
      color: #414141;
      display: inline;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 1px;
      padding-top: 0.2rem;
      transition: color 150ms linear;

      @media screen and (max-width: 678px) {
        display: none;
      }
    }
  }
`;
