import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex: 0 0 auto; */
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  /* align-content: stretch; */
  /* align-self: stretch; */

  height: 100%;
  max-width: 100%;
  padding: 50px 100px;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
  /* height: 100%; */
  /* justify-content: space-between; */
`;

export const Grid = styled.div`
  display: grid;
  flex: 1;
  flex-grow: 1;
  gap: 10px;
  max-width: 100%;
  /* height: 100%; */
  /* padding: 100px 20px; */
  box-sizing: border-box;
  /* grid-template-columns: 200px 200px 200px 200px; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    /* padding: 100px; */
  }
  @media (max-width: 1600px) and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* padding: 100px; */
  }
  @media (max-width: 992px) and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const GenreChip = styled.div`
  box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1};
  /* background-color: ${(props) => props.theme.accentColor2}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  max-width: fit-content;
  background-color: inherit;
  border: none;
  font-size: ${(props) => props.theme.textSizeTextL};
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
  padding: 0.5rem 1.5rem;
  padding-right: 0.5rem;
  border-radius: 1000px;
  box-sizing: border-box;
`;

export const DeleteGenre = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: inherit;
  color: ${(props) => props.theme.accentColor1};
  border: none;
  background-color: inherit;
`;

export const NoMoviesFoundCaption = styled.h1`
  text-align: center;
`;
