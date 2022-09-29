import ContentPagePacient from "../../components/ContentPagePacient";
import { Img } from "./style";

export const DashboardPacient = () => {
  return (
    <ContentPagePacient>
      <Img src={require("../../assets/imageDashboardPatient.gif")} alt="" />
    </ContentPagePacient>
  );
};
