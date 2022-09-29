import { ReactNode } from "react";
import MenuAsideDoctor from "../MenuAsideDoctor";
import { Main } from "./styles";



interface IDashboardProps {
  children: ReactNode;
}

const ContentDashboardDoctor = ({ children }: IDashboardProps) => {
  return (
    <Main Image={Image}>
      <MenuAsideDoctor>
        <main></main>
      </MenuAsideDoctor>
      <section className="content__main">{children}</section>
    </Main>
  );
};

export default ContentDashboardDoctor;
