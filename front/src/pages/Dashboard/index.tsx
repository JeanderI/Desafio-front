import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddTech from "../../components/AddTech";
import FormModal from "../../components/FormModal";
import { ActionsContext } from "../../contexts/ActionsContext";
import { UserContext } from "../../contexts/UserContext";
import { Botao } from "../../styles/button";
import { ContainerDash, Conta, HeaderDash, Usuario, ListaTech } from "./style";
import Techs from "./Contacts";

const DashboardPage = () => {
  const { listTech, user } = useContext(UserContext);
  const { openModal } = useContext(ActionsContext);
  const navigate = useNavigate();
  const logout = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/");
    localStorage.clear();
  };

  return (
    <ContainerDash>
      {openModal && <FormModal />}
      <Conta>
        <HeaderDash>
          <h1>Kenzie Hub</h1>
          <Botao onClick={logout}>Logout</Botao>
        </HeaderDash>

        <Usuario>
          <h2>Olá, {user?.name}</h2>
          <p>{user?.course_module}</p>
        </Usuario>

        <AddTech />
        {listTech.length ? (
          <ListaTech>
            {listTech.map((tec) => (
              <Techs tec={tec} key={tec.id} />
            ))}
          </ListaTech>
        ) : (
          <h3>Nenhuma tecnologia adicionada</h3>
        )}
      </Conta>
    </ContainerDash>
  );
};

export default DashboardPage;
