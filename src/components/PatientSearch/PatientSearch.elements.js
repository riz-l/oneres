// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: #3a3a40;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  right: 0;
  top: 0;
  transform: ${({ isSearchMenuOpen }) =>
    isSearchMenuOpen ? `translateX(0)` : `translateX(100%)`};
  transition: transform 100ms linear, visibility 100ms linear;
  visibility: ${({ isSearchMenuOpen }) =>
    isSearchMenuOpen ? `visibile` : `hidden`};
  width: 500px;
  max-width: 500px;
  min-width: 500px;
  z-index: 4;

  @media screen and (max-width: 768px) {
    width: 100vw;
    max-width: 100vw;
    min-width: 100vw;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  width: 80%;
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: flex-start;
  width: 100%;

  & p {
    color: #f1f1f1;
  }
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;

  & svg {
    fill: #f1f1f1;
    height: 25px;
    margin-right: 8px;
    width: 25px;
  }

  & h3 {
    color: #f1f1f1;
    font-size: 22px;
    font-weight: 600;
  }
`;

// Element: ButtonContainer
export const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  width: 100%;
`;

// Element: Button
export const Button = styled.button`
  background: #3a3a40;
  border: 2px solid #f1f1f1;
  color: #f1f1f1;
  cursor: pointer;
  display: inline;
  font-size: 16px;
  padding: 10px 8px;
  text-decoration: none;
  transition: all 150ms linear;
  width: 100%;

  &:hover {
    background: #f1f1f1;
    color: #3a3a40;
    transition: all 150ms linear;
  }

  &:nth-child(1) {
    margin-right: 10px;
  }
`;

// Element: InputContainer
export const InputContainer = styled.form`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem 0;
  width: 100%;
`;

// Element: Label
export const Label = styled.label`
  color: #f1f1f1;
  margin-bottom: 8px;
`;

// Element: Input
export const Input = styled.input`
  background: transparent;
  border: 1px solid #f1f1f1;
  color: #f1f1f1;
  margin-bottom: 1rem;
  padding: 10px 0;
  text-indent: 1rem;
  transition: all 100ms linear;
  width: 100%;

  &:focus {
    background: #f1f1f1;
    border: 1px solid #3a3a40;
    color: #3a3a40;
    transition: all 100ms linear;
  }
`;

// Element: ResultsContainer
export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  margin-top: 1rem;
  width: 100%;
`;

// Element: ResultsHeader
export const ResultsHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;

  & h5 {
    color: #f1f1f1;
    font-size: 1.4rem;
    font-weight: 500;
    margin: 0 1rem 1rem 0;
  }
`;

// Element: AnonymousButton
export const AnonymousButton = styled.button`
  align-items: center;
  background: #3a3a40;
  border: 2px solid #f1f1f1;
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  height: 35px;
  justify-content: center;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 100ms linear;
  width: 150px;

  &:hover {
    background: #f1f1f1;
    color: #2c2c2c;
    transition: all 150ms linear;
  }

  &:focus {
    background: #f1f1f1;
    border: 2px solid #f1f1f1;
    color: #2c2c2c;
    transition: all 150ms linear;
  }
`;

// Element: AnonymousResults
export const AnonymousResults = styled.div`
  display: ${({ isAnonymousHidden }) => (isAnonymousHidden ? "none" : "flex")};
  flex-direction: column;
  transition: all 150ms linear;
  visibility: ${({ isAnonymousHidden }) =>
    isAnonymousHidden ? "hidden" : "visible"};
`;
