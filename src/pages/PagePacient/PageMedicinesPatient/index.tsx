import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const PageMedicinesPacient = () => {
  const { Medicines } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Medicines}
          nameButton={"Informar Remédio"}
          title={"Informar Remédio"}
          labelName={"Remédio"}
          placeholderName={"Insira o remédio"}
          description={"Descrição"}
          placeholderDescription={"Descreva a situação"}
          sendButton={"Salvar Remédio"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/medicines/historic", { replace: true })
          }
        >
          Histórico de Remédios
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
