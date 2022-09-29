import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";

interface IDashboardDoctorProvider {
  children: ReactNode;
}

interface IHistoric {
  name: string;
  description: string;
}

interface IUser {
  cpf: string;
  email: string;
  id: number;
  name: string;
  password: string;
  type: string;
  alergias?: IHistoric[];
  doencas?: IHistoric[];
  remedios?: IHistoric[];
  exames?: IHistoric[];
}

interface IDashboardDoctorContext {
  searchPatient: (cpf: string) => void;
  cpf: string;
  setCpf: React.Dispatch<React.SetStateAction<string>>;
  logout: () => void;
  userSearch: IUser[] | null;
}

export const DashboardDoctorContext = createContext(
  {} as IDashboardDoctorContext
);

const DashboardDoctorProvider = ({ children }: IDashboardDoctorProvider) => {
  const [cpf, setCpf] = useState("");
  const [userSearch, setUserSearch] = useState(null);

  const Navigate = useNavigate();

  const searchPatient = (cpf: string) => {
    const token = localStorage.getItem("@sgs:token");

    api
      .get(`users?cpf=${cpf}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserSearch(res.data);

        if (res.data[0]?.type === "paciente") {
          Navigate("/dashboard/doctor/patient", { replace: true });
        } else {
          toast.error("CPF não encontrado");
          Navigate("/dashboard/doctor", { replace: true });
        }
      })
      .catch(() => {
        toast.error("Ops, algo deu errado :(");
      });

    setCpf("");
  };

  const logout = () => {
    Navigate("/", { replace: true });
    localStorage.clear();
  };

  return (
    <DashboardDoctorContext.Provider
      value={{ searchPatient, cpf, setCpf, logout, userSearch }}
    >
      {children}
    </DashboardDoctorContext.Provider>
  );
};

export default DashboardDoctorProvider;
