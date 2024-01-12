import exp from "constants";
import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  width: 100%;
  min-height: 100px;
  align-items: center;
  justify-content: space-evenly;
  color: ${(props) => props.theme.textColor};
  /* box-shadow: 0px 0px 5px ${(props) => props.theme.accentColor1}; */
  background-color: ${(props) => props.theme.headerColor};
  top: 0;
  position: sticky;
  overflow: hidden;
  z-index: 50;
  @media (max-width: 768px) and (min-width: 576px) {
    min-height: 60px;
  }
  @media (max-width: 576px) {
    min-height: 60px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 100%; */
  gap: 10px;
  height: 100%;
  margin: 10px 20px;
  /* padding: 0px 20px; */
  background-color: ${(props) => props.theme.headerColor};
  box-sizing: border-box;

  @media (min-width: 1200px) {
    width: 1200px;
  }
  @media (max-width: 1200px) and (min-width: 992px) {
    width: 100%;
  }
  @media (max-width: 992px) and (min-width: 768px) {
    width: 100%;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    width: 100%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Logo = styled.a`
  cursos: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const LogoBG = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  grid-column: 1;
  grid-row: 1;
  background-color: blue;
`;

export const Icon = styled.img`
  display: flex;
  aspect-ration: 1/1;
  /* max-width: 96px; */
  max-height: 96px;
  @media (max-width: 576px) {
    max-height: 48px;
    /* display: none; */
  }
`;
export const LogoName = styled.span`
  display: flex;
  font-size: ${(props) => props.theme.textSizeTitle};
  font-weight: 500;
  font-family: "Monly Lite";
  /* margin: 5px 0px 0px 24px; */
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
  }
  @media (max-width: 576px) {
    font-size: ${(props) => props.theme.textSizeTextM500};
    display: none;
  }
`;

export const SearchContainer = styled.div`
  font-size: clamp(1rem, 1.5rem, 4vw);
  line-height: 3rem;
  /* margin: 0 50px; */
`;

export const Buttons = styled.div`
  font-size: 5rem;
  display: flex;
`;
