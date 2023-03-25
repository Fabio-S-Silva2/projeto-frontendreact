import styled from "styled-components";

export const Header = styled.header`
  background-color: #282c34;
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const SectionHeader = styled.section`
  margin: 2vh 10vw 2vh 10vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SectionForm = styled.form`
  margin: 2vh 5vw 2vh 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 80%;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
`;

export const StyleImput = styled.input`
  width: 10vw;
  height: 2.3vh;
  margin-right: 2vw;
  border-radius: 0.3em;
`;

export const StyleSelect = styled.select`
  width: 15vw;
  height: 2.5vh;
  border-radius: 0.3em;
`;

export const ItsImg = styled.img`
  height: 28vh;
  width: 35vw;
  margin-top: 2vh;
  border-radius: 0.2em;
`;
