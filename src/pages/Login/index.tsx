import MedicalLogin from "../../assets/medical.svg";
import { LoginContaine, Footer, Header } from "./style";
import FormLogin from "../../components/FormLogin";

import logoImg from "../../assets/logo.png"

const Login = () => {
  return (
    <LoginContaine>
      <Header>
        <div>
          <img src={logoImg} alt="logo logic Labs" />
        </div>
      </Header>
      <main>
        <img src={MedicalLogin} alt="Logo" />
        <FormLogin />
      </main>
      <Footer />
    </LoginContaine>
  );
};
export default Login;
