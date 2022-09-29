import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .pre {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border-radius: 50%;
    border: 0.4375rem solid #0080ff;
    border-top: 0.4375rem solid transparent;
  }

  @keyframes preload {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
