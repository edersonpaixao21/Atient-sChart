import { DivButton, DivImage } from "../StylePagePacient/style";
import ImageMedical from "../../../assets/ImageDoctorSit.svg";
import Modals from "../../../components/Modals";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { ModalContext } from "../../../contexts/ModalProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const PageExamsPacient = () => {
  const { Exams } = useContext(ModalContext);
  const navigate = useNavigate();

  return (
    <ContentPagePacient>
      <DivImage className="div-image">
        <img src={ImageMedical} alt="" />
      </DivImage>
      <DivButton>
        <Modals
          modalSent={Exams}
          nameButton={"Informar Exame"}
          title={"Informar Exame"}
          labelName={"Exame"}
          placeholderName={"Insira a exame"}
          description={"Data"}
          placeholderDescription={"Informe a data do exame"}
          sendButton={"Salvar Exame"}
          typeExams={"date"}
        />
        <button
          onClick={() =>
            navigate("/dashboard/patient/exams/historic", { replace: true })
          }
        >
          Histórico de Exames
        </button>
      </DivButton>
    </ContentPagePacient>
  );
};
