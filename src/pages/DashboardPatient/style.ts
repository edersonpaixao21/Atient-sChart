import styled from "styled-components";

export const Img = styled.img`
  width: 200px;

  @media only screen and (min-width: 586px) {
    & {
      width: 300px;
    }
  }

  @media only screen and (min-width: 992px) {
    & {
      width: 400px;
    }
  }

  @media only screen and (min-width: 1200px) {
    & {
      width: 40%;
    }
  }
`;


export const Aside = styled.aside`
  width: 25%;
  max-width: 167px;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 5px 5px grey;

  .div-logo {
    width: 100%;
    height: 15%;
    background-color: #0080ff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 60px;
    height: 60px;
  }

  h2 {
    color: white;
    font-size: 20px;
    font-weight: bolder;
  }

  .div-central {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  p {
    padding-left: 0.2rem;
    padding-top: 2rem;
    color: #0080ff;
  }

  .div-exit {
    width: 100%;
    height: 15%;
    background-color: #0080ff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    p {
      color: white;
      padding: 0;
    }
  }
`;

export const SectionCentral = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }

  h1 {
    font-size: 20px;
    font-weight: bolder;
    color: #0080ff;
  }

  @media only screen and (min-width: 1024px) {
    width: 100%;

    img {
      width: 400px;
      height: 400px;
    }

    h1 {
      font-size: 40px;
    }
  }
`;
