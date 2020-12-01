// Import: Dependencies
import styled from "styled-components";

// Element: Container
export const Container = styled.header`
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  height: 100px;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  min-width: 100%;
  z-index: 3;
`;

// Element: Primary
export const Primary = styled.div`
  background: #569fd3;
  height: 60px;
  min-height: 60px;
  width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    transition: all 100ms linear;
    width: 120px;
    max-width: 120px;
  }
`;

// Element: UserWrapper
export const UserWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: User
export const User = styled.div`
  align-items: center;
  background: #569fd3;
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    background: #3c91cd;
    color: #ffffff;
    transition: all 100ms linear;

    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    height: 35px;
    transition: all 100ms linear;
    width: 35px;
  }
`;

// Element: Secondary
export const Secondary = styled.div`
  background: #2a2a2e;
  height: 40px;
  min-height: 40px;
  width: 100%;
  min-width: 100%;
`;

// Element: ToggleWrapper
export const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: Toggle
export const Toggle = styled.div`
  align-items: center;
  background: #2a2a2e;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  width: auto;

  &:hover {
    background: #1d1d20;

    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }

    & span {
      color: #ffffff;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    height: 30px;
    margin-right: 10px;
    transition: all 100ms linear;
    width: 30px;

    @media screen and (max-width: 768px) {
      margin-right: 0;
    }
  }

  & span {
    color: #f1f1f1;
    text-transform: uppercase;
    transition: all 100ms linear;

    @media screen and (max-width: 768px) {
      display: none;
      visibility: hidden;
    }
  }
`;

// Element: ButtonMenu
export const ButtonMenu = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: Button
export const Button = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    background: #1d1d20;
    transition: all 100ms linear;

    & svg {
      fill: #ffffff;
      transition: all 10ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    height: 25px;
    transition: all 100ms linear;
    width: 25px;
  }
`;
