import styled from "styled-components";

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  /* min-height: 40px; */
  justify-content: center;
  background-color: ${(props) => props.theme.bachgroundColor};
  transition: 0.1s;
  /* gap: 10px; */
  margin: 20px 0px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const Item = styled.div<{ $visible: boolean }>`
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
  justify-content: center;
  aspect-ration: 1/1;
  align-items: center;
  background-color: ${(props) => props.theme.iconColor};
  font-weight: 500;
  font-size: ${(props) => props.theme.textSizeTextL};
  height: 40px;
  max-width: 40px;
  border-radius: 50px;
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.outlineColor};
  /* box-sizing: border-box; */
  transition: 0.1s;
  &:hover {
    transition: 0.1s;
    /* color: white; */
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.accentColor1};
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    /* height: 40px; */
  }
  /* margin: 0px 10px 0px 0px; */
  /* &:last-child { */
  /*   margin: 0px 0px 0px 0px; */
`;

export const ActiveItem = styled(Item)`
  color: ${(props) => props.theme.textColorInverted};
  box-shadow: 0px 0px 0px 2px ${(props) => props.theme.accentColor1};
  background-color: ${(props) => props.theme.accentColor1};
`;
