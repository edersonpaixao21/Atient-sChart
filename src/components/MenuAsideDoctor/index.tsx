import { ReactNode, useContext } from "react";
import { GiExitDoor } from "react-icons/gi";
import { DashboardDoctorContext } from "../../contexts/DashboardDoctorProvider";
import { LoginContext } from "../../contexts/LoginProvider";
import { Aside } from "./styles";

interface IProps {
  children?: ReactNode;
}

const MenuAsideDoctor = ({ children }: IProps) => {
  const { logout } = useContext(DashboardDoctorContext);
  const { user } = useContext(LoginContext);

  return (
    <Aside>
      <header className="menu__side__header">
        <figure className="header__containerLogo">
          <img
            className="header__containerLogo__img"
            src={require("../../assets/LogoNovo.png")}
            alt="logo"
          />
        </figure>
      </header>
      <main>{children}</main>
      <footer className="menu__side__footer">
        <h2 className="footer__name">Olá, {user.name}</h2>
        <button className="footer__button" onClick={() => logout()}>
          <GiExitDoor />
          Sair
        </button>
      </footer>
    </Aside>
  );
};

export default MenuAsideDoctor;
