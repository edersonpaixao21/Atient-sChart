import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const PageDiseasePacient = () => {
  const { Illnesses } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Illnesses}
          nameButton={"Informar Doença"}
          title={"Informar Doença"}
          labelName={"Doença"}
          placeholderName={"Insira a doença"}
          description={"Descrição"}
          placeholderDescription={"Descreva a doença"}
          sendButton={"Salvar Doença"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/disease/historic", { replace: true })
          }
        >
          Histórico de Doenças
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
