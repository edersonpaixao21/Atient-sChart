import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Error = styled.div`
  position: relative;

  svg {
    color: #f10;
  }

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;
    background-color: #f10;
    padding: 4px 15px;
    border-radius: 3px;
    top: -1px;
    right: 26px;
    opacity: 0;
    transition: opacity 0.4s;
    color: white;
    white-space: nowrap;

    &::before {
      content: "";
      border-style: solid;
      border-width: 10px 7px 0px 7px;
      transform: rotate(270deg);
      border-color: #f10 transparent;
      position: absolute;
      top: 4px;
      right: -8px;
    }
  }
`;
