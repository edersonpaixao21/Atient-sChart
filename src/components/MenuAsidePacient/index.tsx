import { useNavigate, useParams } from "react-router-dom";
import { Aside } from "./style";

export const MenuAsidePacient = () => {
  const Navigate = useNavigate();

  const { allergies, diseases, exams, medicines } = useParams();

  return (
    <Aside
      allergies={allergies}
      diseases={diseases}
      exams={exams}
      medicines={medicines}
    >
      <ul>
        <li
          className="p__alergias"
          onClick={() => {
            Navigate("/dashboard/patient/allergie/:allergies");
          }}
        >
          Alergias
        </li>
        <li
          className="p__doencas"
          onClick={() => {
            Navigate("/dashboard/patient/disease/:diseases");
          }}
        >
          Doenças
        </li>
        <li
          className="p__exames"
          onClick={() => {
            Navigate("/dashboard/patient/exam/:exams");
          }}
        >
          Exames
        </li>
        <li
          className="p__remedios"
          onClick={() => {
            Navigate("/dashboard/patient/medicine/:medicines");
          }}
        >
          Remédios
        </li>
      </ul>
    </Aside>
  );
};
