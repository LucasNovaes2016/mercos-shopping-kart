import React from "react";
import { IHeaderTop } from "../../../../core/interfaces";
import WhatsApp from "@material-ui/icons/WhatsApp";
import Room from "@material-ui/icons/Room";
import Person from "@material-ui/icons/Person";

/* Componente para renderizar a parte superior do cabecalho */

export default function HeaderTop({ numero, usuario, local }: IHeaderTop) {
  return (
    <div className="d-flex justify-content-between header-top">
      <div>
        <div className="header-top-item px-2">
          <WhatsApp className="primary-icon" /> {numero}
        </div>
      </div>
      <div>
        <div className="header-top-item px-2">
          <Person className="primary-icon" />
          {usuario}
        </div>
        <div className="header-top-item px-2">
          <Room className="primary-icon" /> {local}
        </div>
      </div>
    </div>
  );
}
