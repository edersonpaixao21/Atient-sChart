import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  useForm,
  UseFormRegister,
  UseFormHandleSubmit,
  FieldErrorsImpl,
} from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { LoginContext } from "../LoginProvider";

interface IModalProvider {
  children: ReactNode;
}

interface IRegister {
  description?: string;
  name?: string;
}

interface IModalContext {
  handleSubmit: UseFormHandleSubmit<IRegister>;
  Allergy: (data: IRegister) => void;
  Illnesses: (data: IRegister) => void;
  Exams: (data: IRegister) => void;
  Medicines: (data: IRegister) => void;
  register: UseFormRegister<IRegister>;
  errors: FieldErrorsImpl<IRegister>;
  isSubmitting: boolean;
  allergys?: IRegister[];
  illnesses?: IRegister[];
  exams?: IRegister[];
  medicines?: IRegister[];
}

export const ModalContext = createContext({} as IModalContext);
const ModalProvider = ({ children }: IModalProvider) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IRegister>();

  const [allergys, setAllergy] = useState<IRegister[]>([]);
  const [illnesses, setIIllnesses] = useState<IRegister[]>([]);
  const [exams, setExams] = useState<IRegister[]>([]);
  const [medicines, setMedicines] = useState<IRegister[]>([]);

  const Allergy = (data: IRegister) => {
    setAllergy([...allergys, data]);
    toast.success("Alergia cadastrada com sucesso!");
  };

  const Illnesses = (data: IRegister) => {
    setIIllnesses([...illnesses, data]);
    toast.success("Doença cadastrada com sucesso!");
  };

  const Exams = (data: IRegister) => {
    setExams([...exams, data]);
    toast.success("Exame cadastrado com sucesso!");
  };

  const Medicines = (data: IRegister) => {
    setMedicines([...medicines, data]);
    toast.success("Remédio cadastrado com sucesso!");
  };

  return (
    <ModalContext.Provider
      value={{
        handleSubmit,
        register,
        errors,
        isSubmitting,
        Allergy,
        Illnesses,
        Exams,
        Medicines,
        allergys,
        illnesses,
        exams,
        medicines,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
