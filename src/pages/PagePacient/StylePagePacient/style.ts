import styled from "styled-components";

export const DivImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 80%;
    max-width: 392px;
    border-radius: 50%;

    @media only screen and (min-width: 768px) {
      width: 300px;
      height: 400px;
      border-radius: 50%;
    }

    @media only screen and (min-width: 1024px) {
      width: 400px;
    }
  }
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  button {
    width: 80%;
    max-width: 450px;
    height: 50px;
    white-space: nowrap;
    border: none;
    border-radius: 10px;
    background-color: #0080ff;
    color: white;
    font-size: 16px;

    &:hover {
      opacity: 80%;
    }
  }
`;
