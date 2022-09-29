import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { useContext } from "react";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useNavigate } from "react-router-dom";

export const PageAllergiesPacient = () => {
  const { Allergy } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Allergy}
          nameButton={"Informar Alergia"}
          title={"Informar Alergia"}
          labelName={"Alergia"}
          placeholderName={"Insira a alergia"}
          description={"Descrição"}
          placeholderDescription={"Descreva a alergia"}
          sendButton={"Salvar Alergia"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/allergies/historic", { replace: true })
          }
        >
          Histórico de Alergia
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
