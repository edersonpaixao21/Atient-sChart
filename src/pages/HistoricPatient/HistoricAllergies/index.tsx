import { DivGeneral, DivUl, H1 } from "../StyleHistoric/style";
import { useContext, useEffect } from "react";
import ContentPagePacient from "../../../components/ContentPagePacient";
import { LoginContext } from "../../../contexts/LoginProvider";
import api from "../../../services/api";
import { ModalContext } from "../../../contexts/ModalProvider";
import { toast } from "react-toastify";

export const HistoryAllergies = () => {
  const { user, setUser } = useContext(LoginContext);
  const { allergys } = useContext(ModalContext);
  const token = localStorage.getItem("@sgs:token");
  const idUsuario = user.id;

  useEffect(() => {
    api
      .patch(
        `/users/${idUsuario}`,
        { alergias: allergys },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [allergys]);

  return (
    <ContentPagePacient>
      <DivGeneral>
        <div>
          <H1>Alergias</H1>
        </div>
        <DivUl className="div-ul">
          <ul>
            {user.alergias &&
              user.alergias.map((elem, index) => (
                <li key={index}>
                  <p className="p-history">{elem.name}</p>
                  <details>
                    <summary>Descrição:</summary>
                    <p className="p-description">{elem.description}</p>
                  </details>
                </li>
              ))}
          </ul>
        </DivUl>
      </DivGeneral>
    </ContentPagePacient>
  );
};
