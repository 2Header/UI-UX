import styled from "styled-components";

export const SearchBar = styled.input`
  padding-left: 1rem;
  background-color: ${(props) => props.theme.backgroundColor};
  font-size: inherit;
  /* font-size: clamp(1rem, 1.5rem, 4vw); */
  color: ${(props) => props.theme.textColor};
  border: none;
  box-shadow: 0 0 0 2px ${(props) => props.theme.outlineColor}; // fake border, so that it doesn't affect layout
  outline: none;
  border-radius: 500px;
  line-height: inherit;
  transition: 0.1s;
  -webkit-transition: 0.1s;
  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.accentColor1};
  }
  &:focus {
    box-shadow: 0 0 0 3px ${(props) => props.theme.accentColor1};
  }
`;
