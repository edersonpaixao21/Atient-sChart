import styled from "styled-components";

export const MainDashboard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  width: 100%;
  height: 100%;

  @media only screen and (min-width: 768px) {
    & {
      width: max-content;
    }
  }

  .dashboard__container--profile {
    display: flex;
    align-items: center;
    gap: 0.625rem;
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
    color: #0080ff;
  }

  @media only screen and (min-width: 768px) {
    .container__name {
      font-size: 1.25rem;
    }
  }

  .dashboard__type {
    color: #0080ff;
    padding: 1.25rem;
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
        width: 50vw;
      }
    }
  }

  @media only screen and (min-width: 1500px) {
    .dashboard__historic {
      .historic__type {
        width: 750px;
      }
    }
  }
`;
