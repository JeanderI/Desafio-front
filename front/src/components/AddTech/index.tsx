import React, { useContext } from "react";
import { ActionsContext } from "../../contexts/ActionsContext";
import { AddTec } from "./style";
import { BsPlusLg } from "react-icons/bs";
const AddTech = () => {
  const { handleAdd } = useContext(ActionsContext);

  return (
    <AddTec>
      <h2>Tecnologias</h2>
      <button onClick={handleAdd}>
        <BsPlusLg />
      </button>
    </AddTec>
  );
};

export default AddTech;
