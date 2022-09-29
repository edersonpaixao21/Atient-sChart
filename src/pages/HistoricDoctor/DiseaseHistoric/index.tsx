import ContentDashboardDoctor from "../../../components/ContentDashboardDoctor";
import { MainDashboard } from "../StylesHitoricDoctor/styles";
import Profile from "../../../assets/ProfileTest.svg";
import { DashboardDoctorContext } from "../../../contexts/DashboardDoctorProvider";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const DiseasesHistoric = () => {
  const { userSearch } = useContext(DashboardDoctorContext);

  const Navigate = useNavigate();
  return (
    <ContentDashboardDoctor>
      <BiArrowBack
        size={40}
        onClick={() => Navigate("/dashboard/doctor/patient", { replace: true })}
      />
      <MainDashboard className="main__dashboard">
        <div className="dashboard__container--profile">
          <figure className="container__containerImg">
            <img className="containerImg__img" src={Profile} alt="" />
          </figure>
          <h1 className="container__name">
            {userSearch && userSearch[0].name}
          </h1>
        </div>
        <h2 className="dashboard__type">Doenças</h2>
        <ul className="dashboard__historic">
          {userSearch && (
            userSearch[0].doencas?.map((doenca, index) => {
              return (
                <li key={index} className="historic__type">
                  <h3>Alergia: {doenca.name}</h3>
                  <details>
                    <summary>Descrição:</summary>
                    <p className="p-description">{doenca.description}</p>
                  </details>
                </li>
              );
            })
          )}
        </ul>
      </MainDashboard>
    </ContentDashboardDoctor>
  );
};

export default DiseasesHistoric;
