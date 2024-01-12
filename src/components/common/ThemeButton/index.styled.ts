import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  /* flex: 0 0 auto; */
  flex-grow: 1;
  width: 56px;
  height: 56px;
  border-radius: 50px;
  border: 2px solid ${(props) => props.theme.outlineColor};
  aspect-ration: 1/1;
  justify-content: center;
  align-items: center;
  padding: auto;
  background-color: ${(props) => props.theme.backgroundColor};
  /* box-shadow: 0px 0px 5px ${(props) => props.theme.shadowColor} ; */
  color: ${(props) => props.theme.textColor};
  &:hover {
    /* background-color: ${(props) => props.theme.accentColor1}; */
    border: 2px solid ${(props) => props.theme.accentColor1};
    /* color: white; */
    transition: 0.1s;
  }
  &:active {
    outline: none;
    background-color: ${(props) => props.theme.accentColor1};
    color: ${(props) => props.theme.textColorInverted};
    border: none;
  }
  cursor: pointer;
  transition: 0.1s;
`;

export const Content = styled.div`
  height: 56px;
  max-width: 56px;
  padding: auto;
  display: flex;
  width: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.div`
  display: flex;
  /* width: 150%; */
  /* width: 150%; */
  align-items: center;
  justify-content: center;
  /* font-size: inherit; */
  font-size: clamp(1.5rem, 1.5rem, 4vw);
  font-weight: 600;
`;
