import React from "react";
import { IHeaderInfo } from "../../../core/interfaces";
import WhatsappIcon from "mdi-react/WhatsappIcon";
import AccountIcon from "mdi-react/AccountIcon";
import MapMarker from "mdi-react/MapMarkerIcon";

export default function HeaderInfo({ numero, usuario, local }: IHeaderInfo) {
  return (
    <div className="d-flex justify-content-between header-info py-2">
      <div>
        <div className="header-info-item px-2">
          <WhatsappIcon /> {numero}
        </div>
      </div>
      <div>
        <div className="header-info-item px-2">
          <AccountIcon />
          {usuario}
        </div>
        <div className="header-info-item px-2">
          <MapMarker /> {local}
        </div>
      </div>
    </div>
  );
}
