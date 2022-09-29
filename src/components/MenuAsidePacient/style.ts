import styled from "styled-components";

interface IProps {
  allergies: string;
  diseases: string;
  exams: string;
  medicines: string;
}

export const Aside = styled.aside`
  background-color: #0080ff;
  .p__alergias {
    color: ${(data: IProps) =>
      data.allergies !== undefined && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__alergias:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.allergies !== undefined && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__doencas {
    color: ${(data: IProps) =>
      data.diseases !== undefined && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__doencas:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.diseases !== undefined && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__exames {
    color: ${(data: IProps) =>
      data.exams !== undefined && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__exames:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.exams !== undefined && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  .p__remedios {
    color: ${(data: IProps) =>
      data.medicines !== undefined && "rgba(142, 7, 7, 1)"};
    border-bottom: 2px solid transparent;
  }

  .p__remedios:hover {
    cursor: pointer;
    border-bottom: 2px solid
      ${(data: IProps) => data.medicines !== undefined && "rgba(142, 7, 7, 1)"};
    transition: 0.3s;
  }

  ul {
    background-color: #0080ff;
    padding-left: 6px;

    @media only screen and (min-width: 768px) {
      & {
        padding-left: 15px;
      }
    }
  }

  li {
    padding-left: 0.2rem;
    padding-top: 2rem;
    color: #fff;
    width: max-content;
  }
`;
