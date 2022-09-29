import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  div {
    width: 100%;
    background-color: #0080ff;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 280px;
  }

`;

export const Div = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 4.5%;
  }
`;

export const DoctorImg = styled.img`
  width: 0%;

  @media (min-width: 768px) {
    width: 35%;
  }
`;

export const PacientImg = styled.img`
  width: 230px;
  margin-top: 30px;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    width: 0%;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 20px;
  background-color: #0080ff;
  position: fixed;
  bottom: 0;
`;
