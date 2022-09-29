import FormRegister from "../../components/FormRegister";
import { Header, Div, Footer, DoctorImg, PacientImg } from "./styles";
import Doctor from "../../assets/Doctor.svg";
import Pacient from "../../assets/Pacient.svg";
import logoImg from "../../assets/logo.png"


const Register = () => {
  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="logo logic labs" />
        </div>
      </Header>
      <Div>
        <PacientImg src={Pacient} alt="Pacient" />
        <DoctorImg src={Doctor} alt="Doctor" />
        <FormRegister />
      </Div>
      <Footer />
    </>
  );
};

export default Register;
