import styled from "styled-components";

export const CoverImage = styled.img`
  grid-row: 1;
  grid-column: 1;
  aspect-ratio: 1/1/5;
  /* display: flex; */
  flex: 0 0 auto;
  /* padding: 5px 5px; */
  height: 100%;
  width: 100%;
  /* object-fit: cover; */
  /* box-sizing: border-box; */
`;

export const TextBlock = styled.div`
  grid-row: 1;
  overflow: hidden;
  grid-column: 1;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-direction: column;
  /* align-items: stretch; */
  /* align-self: flex-end; */
  text-shadow: -1px 1px 4px ${(props) => props.theme.shadowColor};
  overflow: hidden;
  color: white;
  z-index: 1;
  padding: 8px;
  /* margin: 600px 0 0 0; */
`;

export const MainInfo = styled.div`
  display: flex;
`;

export const HoverInfo = styled.div`
  display: flex;
  flex-grow: 1;
  /* justify-content: flex-start; */
  flex-direction: column;
  font-size: clamp(1rem, 1.5vw, 2vh);
  transform: translate(0%, -100%);
  transition: all 1s;
  /* align-items: stretch; */
  /* clip-path: inset(0rem 0rem 100% 0rem); */
  /* max-height: 0px; */
`;

export const Title = styled.h1`
  font-size: clamp(1.4rem, 2vw, 3vh);
  margin: 0;
  right: 0;
  width: 100%;
`;

export const Year = styled.h2`
  font-size: clamp(1rem, 1vw, 3vh);
  font-weight: bold;
  text-align: center;
  margin: 5px;
  /* color: ${(props) => props.theme.accentColor2}; */
  text-shadow: 0 0 1px ${(props) => props.theme.shadowColor};
`;

export const Genre = styled.h2`
  text-align: center;
  margin: 0 0 0 0;
`;

export const Score = styled.div`
  background: ${(props) => props.theme.accentColor1};
  /* width: clamp(50%, 15vw, 25vh); */
  /* margin-top: auto; */
  box-shadow: 0px 3px 10px #00000066;
  text-shadow: 3px 3px 0px ${(props) => props.theme.shadowColor};
  text-align: center;
  font-size: clamp(3rem, 4vw, 4rem);
  border-radius: clamp(12px, 2vw, 25px);
  padding: clamp(5px, 1vw, 7vh);
  margin-bottom: 5px;
  align-self: center;
  justify-self: flex-end;
  font-weight: bold;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 0;
`;
export const SolidOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.shadowColor};
  opacity: 0;
  transition: all 0.3s;
  z-index: 0;
`;
export const CardContainer = styled.div`
  display: grid;
  position: relative;
  width: 100%;
  height: 100%;
  /* min-height: 100%; */
  border-radius: 1rem;
  overflow: hidden;
  aspect-ratio: 0.67/1;
  transition: all 0.3s;
  /* z-index: 10; */
  &:hover {
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.accentColor1};
    & ${SolidOverlay} {
      transition: all 0.3s;
      opacity: 0.6;
    }
    & ${HoverInfo} {
      transition: all 0.3s;
      transform: translate(0%, 0%);
    }
  }
`;
