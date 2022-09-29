import styled from "styled-components";

export const Form = styled.form`
  width: 260px;
  height: 320px;
  background: #fffbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 50px;

  h1 {
    font-size: 22px;
    margin-bottom: 18px;
    font-weight: 700;
    color: #0080ff;
  }

  p {
    font-size: 16px;
    color: #000000;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 14px;
      color: #000000;
    }
  }

  @media (min-width: 350px) {
    width: 320px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      4px 0px 13px rgba(0, 0, 0, 0.25);
  }
`;

export const DivGeneral = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;

  label {
    font-size: 13px;
  }

  input {
    width: 250px;
    height: 30px;
    background: #d9d9d9;
    border-radius: 4px;
    border: none;
    color: #424242;
    padding-left: 8px;
  }

  div:nth-child(4) {
    display: flex;
    align-items: center;
    background: #d9d9d9;
    border-radius: 4px;
    padding-right: 10px;
    gap: 10px;
    :focus-within {
      outline: 2px solid black;
    }

    input {
      width: 216px;
      :focus {
        outline: none;
      }
    }
  }

  @media (min-width: 768px) {
  }
`;

export const Back = styled.button`
  background: transparent;
  border: none;
  color: #000000;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ButtonSend = styled.button`
  margin-top: 10px;
  width: 225px;
  height: 35px;
  background: #0080ff;
  border-radius: 10px;
  border: none;
  color: #ffffff;
  font-size: 13px;
  padding: 5px;
  margin-top: 25px;

  &:hover {
    opacity: 90%;
  }

  @media (min-width: 768px) {
    width: 250px;
    height: 40px;
    font-size: 15px;
  }
`;
