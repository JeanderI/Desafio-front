import React, { useContext } from "react";
import { ActionsContext } from "../../../contexts/ActionsContext";
import { ItensTech } from "./style";
import { BsTrashFill } from "react-icons/bs";
import { iListTech } from "../../../contexts/UserContext";

interface iTechsProps {
  tec: iListTech;
}
const Techs = ({ tec }: iTechsProps) => {
  const { handleDelete } = useContext(ActionsContext);
  return (
    <ItensTech>
      <h3>{tec.title}</h3>

      <div>
        <p>{tec.status}</p>
        <button onClick={() => handleDelete(tec.id)}>
          <BsTrashFill />
        </button>
      </div>
    </ItensTech>
  );
};

export default Techs;
