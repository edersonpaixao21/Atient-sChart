import styled from "styled-components";

interface IImage {
  Image: string;
}

export const Main = styled.main<IImage>`
  display: flex;
  height: 100vh;
  min-height: 100%;
  position: relative;

  .content__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    min-height: 100%;
    background-color: #bbbbbb;
    background-size: cover;
    width: 70%;
    position: absolute;
    right: 0;

    svg {
      position: absolute;
      left: 10px;
      top: 5px;
    }

    .content__empty {
      width: 200px;
    }
  }

  @media only screen and (min-width: 586px) {
    .content__main {
      .content__empty {
        width: 300px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .content__main {
      width: calc(100% - 215px);
    }
  }
`;
