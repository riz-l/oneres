// Import: Dependencies
import styled from "styled-components";

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & span {
    font-size: 14px;
    margin-top: 1.4rem;
  }
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  background: #2a2a2e;
  border-radius: 50%;
  display: flex;
  height: 50px;
  max-height: 50px;
  min-height: 50px;
  justify-content: center;
  width: 50px;
  max-width: 50px;
  min-width: 50px;

  & svg {
    fill: #f1f1f1;
    height: 25px;
    transition: all 100ms linear;
    width: 25px;
  }
`;

// Element: Container
export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: flex-start;
  padding: 0.6rem 1rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    background: #2a2a2e;
    color: #ffffff;
    transition: all 100ms linear;

    & ${Icon} {
      background: #3a3a40;
      border-radius: 20px;
      transition: all 300ms linear;

      & svg {
        fill: #ffffff;
        transition: all 100ms linear;
      }
    }
  }
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: Details
export const Details = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`;

// Element: DetailItem
export const DetailItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  justify-content: flex-start;
  margin-bottom: 0.6rem;

  &:first-child {
    margin-bottom: 0;
  }

  &:nth-child(3) {
    margin-bottom: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  & h2 {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

// Element: StatusWrapper
export const StatusWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0.2rem;
  text-align: right;
`;

// Element: StatusItem
export const StatusItem = styled.div`
  font-size: 12px;

  & span {
    font-weight: lighter;
    opacity: 0.8;
  }

  & p {
    font-size: 12px;
    margin-top: 1rem;
  }
`;
