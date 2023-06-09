import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/ActionsContext";

import {
  BackgroundModal,
  ContainerModal,
  Header,
  CloseIcon,
  FormContainer,
  Form,
  Input,
  Footer,
} from "../../styles/modalForm";

const FormModal = () => {
  const {
    handleClose,
    title,
    titleHandler,
    status,
    statusHandler,
    handleSubmit,
  } = useContext(ActionsContext);
  const nivelStatus = ["Iniciante", "Intermediário", "Avançado"];

  return (
    <BackgroundModal>
      <ContainerModal>
        <Header>
          <h3>Cadastrar Tecnologia</h3>
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={handleSubmit}>
          <Form>
            <Input>
              <label htmlFor="nome">Nome</label>
              <input
                id="nome"
                type="text"
                value={title}
                onChange={titleHandler}
                placeholder="Digite o nome"
              />
            </Input>
            <Input>
              <label htmlFor="slcStatus">Selecionar status</label>
              {
                <select id="slcStatus" value={status} onChange={statusHandler}>
                  {nivelStatus.map((nivel, index) => (
                    <option key={index} value={nivel}>
                      {nivel}
                    </option>
                  ))}
                </select>
              }
            </Input>
          </Form>
          <Footer>
            <button type="submit">Cadastrar Tecnologia</button>
          </Footer>
        </FormContainer>
      </ContainerModal>
    </BackgroundModal>
  );
};

export default FormModal;
