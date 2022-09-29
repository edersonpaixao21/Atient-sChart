import { useContext } from "react";

import { LoginContext } from "../../contexts/LoginProvider";
import Input from "../InputRegister";

import { useNavigate } from "react-router-dom";
import { Back, ButtonSend, DivGeneral, Form } from "./styles";

const FormLogin = () => {
  const { signIn, register, errors, handleSubmit } = useContext(LoginContext);

  const Navigate = useNavigate();

  return (
    <>
      <Form onSubmit={handleSubmit(signIn)}>
        <h1>Entrar</h1>
        <DivGeneral>
          <Input
            label={"E-mail"}
            register={register}
            id={"email"}
            error={errors?.email}
            placeholder={"Digite seu E-mail"}
            type={"text"}
          />
          <Input
            label={"Senha"}
            register={register}
            id={"password"}
            error={errors?.password}
            placeholder={"Digite sua senha"}
            type={"password"}
          />
        </DivGeneral>
        <ButtonSend type="submit">Entrar</ButtonSend>
        <div>
          <p>
            Ainda não tem conta?
            <Back onClick={() => Navigate("/register", { replace: true })}>
              Cadastre-se
            </Back>
          </p>
        </div>
      </Form>
    </>
  );
};

export default FormLogin;
