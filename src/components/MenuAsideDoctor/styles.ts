import styled from "styled-components";

export const Aside = styled.aside`
  color: #fff;
  background-color: #0080ff;
  min-height: 100%;
  height: 100vh;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  box-shadow: 9px 5px 9px -5px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width: 768px) {
    & {
      width: 215px;
    }
  }

  .menu__side__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px 0.625rem;
    background-color: #0080ff;

    .header__title {
      font-size: 1rem;
    }

    .header__containerLogo__img {
      width: 100px;
    }
  }

  @media only screen and (min-width: 768px) {
    .menu__side__header {
      flex-direction: row;
      gap: 0.625rem;

      .header__title {
        font-size: 20px;
      }
    }
  }

  main {
    height: 100%;
    width: 100%;
  }

  .menu__side__footer {
    background-color: #0080ff;
    padding: 25px 0.625rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    .footer__name {
      font-size: 0.75rem;
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    button {
      padding: 5px 15px;
      background-color: red;
      color: white;
      border: none;
      border-radius: 1rem;
      display: flex;
      justify-content: center;
      gap: 5px;
    }
  }

  @media only screen and (min-width: 586px) {
    .menu__side__footer {
      align-items: center;

      button {
        width: 156px;
      }
    }
  }
`;
