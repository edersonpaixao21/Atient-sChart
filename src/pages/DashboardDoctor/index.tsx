import { Form } from "./styles";
import Img from "../../assets/historicoVazio.svg";
import ContentDashboardDoctor from "../../components/ContentDashboardDoctor";
import { useContext } from "react";
import { DashboardDoctorContext } from "../../contexts/DashboardDoctorProvider";

const DashboardDoctor = () => {
  const { searchPatient, cpf, setCpf } = useContext(DashboardDoctorContext);

  return (
    <ContentDashboardDoctor>
      <Form
        className="content__main__form"
        onSubmit={(ev: Event) => {
          ev.preventDefault();
          searchPatient(cpf);
        }}
      >
        <input
          className="form__input"
          type="text"
          placeholder="Insira o cpf do paciente"
          onChange={(ev) => setCpf(ev.target.value)}
        />
        <button className="form__button" type="submit">
          Buscar
        </button>
      </Form>
      <img className="content__empty" src={Img} alt="" />
    </ContentDashboardDoctor>
  );
};

export default DashboardDoctor;
