import styled from "styled-components";

export const Form = styled.form`
  padding: 50px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 50px;

  .form__input {
    border: 2px solid #d9d9d9;
    padding: 0.625rem;
    width: 90%;
  }

  .form__input::placeholder {
    color: #d9d9d9;
  }

  .form__input:focus {
    outline: none;
  }

  .form__button {
    background-color: #0080ff;
    color: white;
    padding: 0.625rem;
    border-radius: 5px;
  }

  @media only screen and (min-width: 586px) {
    width: 70%;

    .form__input {
      width: 100%;
    }

    .form__button {
      width: 50%;
    }
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 0;

    .form__input {
      width: 450px;
    }
    .form__button {
      width: 190px;

      border-radius: 0 5px 5px 0;

      font-size: 1rem;
    }
  }
`;

export const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (min-width: 768px) {
    & {
      width: max-content;
    }
  }

  .dashboard__container--profile {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 1.875rem;
  }

  @media only screen and (min-width: 586px) {
    .dashboard__container--profile {
      justify-content: flex-start;
      width: 100%;
      padding: 0 1.875rem;
    }
  }

  .containerImg__img {
    width: 60px;
  }

  @media only screen and (min-width: 768px) {
    .containerImg__img {
      width: 70px;
    }
  }

  .container__name {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    .container__name {
      font-size: 1.25rem;
    }
  }

  .dashboard__historic {
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    padding: 0 0.625rem;
    width: 100%;

    .historic__type {
      background-color: #0080ff;
      color: white;
      padding: 0.625rem;
      text-align: center;
      border-radius: 0.25rem;
    }
  }

  @media only screen and (min-width: 586px) {
    .dashboard__historic {
      padding: 0 1.875rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .dashboard__historic {
      .historic__type {
        width: 495px;
      }
    }
  }
`;
