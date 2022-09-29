import { Form, DivGeneral, Back, ButtonSend } from "./styles";
import Input from "../InputRegister";
import { useContext } from "react";
import { RegisterContext } from "../../contexts/RegisterProvider";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const { errors, handleSubmit, register, registerUser } =
    useContext(RegisterContext);

  const Navigate = useNavigate();
  return (
    <>
      <Form onSubmit={handleSubmit(registerUser)}>
        <h1>Cadastro de Usuário</h1>
        <DivGeneral>
          <Input
            label={"Nome"}
            register={register}
            id={"name"}
            error={errors?.name}
            placeholder={"Digite seu Nome"}
            type={"text"}
          />
          <Input
            label={"CPF"}
            register={register}
            id={"cpf"}
            error={errors?.cpf}
            placeholder={"Digite seu CPF"}
            type={"text"}
          />
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
          <Input
            label={"Confirmar Senha"}
            register={register}
            id={"confirmPassword"}
            error={errors?.confirmPassword}
            placeholder={"Confirme sua senha"}
            type={"password"}
          />
          <label>Tipo</label>
          <select {...register("type")}>
            <option value="paciente">Paciente</option>
            <option value="enfermeiro">Enfermeiro</option>
          </select>
        </DivGeneral>
        <ButtonSend type="submit">Cadastrar</ButtonSend>
        <Back onClick={() => Navigate("/", { replace: true })}>Voltar</Back>
      </Form>
    </>
  );
};

export default FormRegister;
