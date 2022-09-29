import { ReactNode } from "react";
import { DivGeneral, SectionGeneral } from "./style";
import { MenuAsidePacient } from "../MenuAsidePacient";
import MenuAsideDoctor from "../MenuAsideDoctor";

interface IDashboardProps {
  children: ReactNode;
}

const ContentPagePacient = ({ children }: IDashboardProps) => {
  return (
    <DivGeneral>
      <MenuAsideDoctor children={<MenuAsidePacient />} />
      <SectionGeneral className="section__patient" Image={Image}>
        {children}
      </SectionGeneral>
    </DivGeneral>
  );
};

export default ContentPagePacient;
