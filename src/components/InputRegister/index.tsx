import { Div, Error } from "./styles";
import { BiErrorCircle } from "react-icons/bi";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IUser {
  name?: string;
  cpf?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  type?: string;
}

interface IInuput {
  register: UseFormRegister<IUser> | any;
  id: "type" | "password" | "email" | "name" | "cpf" | "confirmPassword";
  label: string;
  error: FieldError | undefined;
  placeholder: string;
  type: string;
}

const Input = ({ register, id, label, error, placeholder, type }: IInuput) => {
  const [visibleConfirm, setVisibleConfirm] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Div>
        <label>{label}</label>
        {error?.message && (
          <Error>
            <BiErrorCircle />
            <span>{error?.message}</span>
          </Error>
        )}
      </Div>
      <div className="InputContaine">
        <input
          placeholder={placeholder}
          type={
            type === "password"
              ? visible || visibleConfirm
                ? "text"
                : "password"
              : type
          }
          {...register(id)}
        />
        {label === "Senha" &&
          (visible ? (
            <AiFillEye
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(false)}
            />
          ) : (
            <AiFillEyeInvisible
              style={{ cursor: "pointer" }}
              onClick={() => setVisible(true)}
            />
          ))}
        {label === "Confirmar Senha" &&
          (visibleConfirm ? (
            <AiFillEye
              style={{ cursor: "pointer" }}
              onClick={() => setVisibleConfirm(false)}
            />
          ) : (
            <AiFillEyeInvisible
              style={{ cursor: "pointer" }}
              onClick={() => setVisibleConfirm(true)}
            />
          ))}
      </div>
    </>
  );
};

export default Input;
