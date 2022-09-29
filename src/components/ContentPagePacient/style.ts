import styled from "styled-components";

export const DivGeneral = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

export const SectionGeneral = styled.section`
  width: 70%;
  height: 100vh;
  position: absolute;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding-bottom: 100px;
  background-color: #bbbbbb;
  background-size: cover;

  @media only screen and (min-width: 768px) {
    & {
      width: calc(100% - 215px);
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      padding: 0;
    }
  }
`;
