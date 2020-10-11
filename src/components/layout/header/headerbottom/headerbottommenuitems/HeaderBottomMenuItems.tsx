import React from "react";
import Menu from "@material-ui/icons/Menu";

export default function HeaderBottomMenuItems() {
  return (
    <div>
      <ul className="nav">
        <Menu />
        <li className="nav-item px-2">SETORES</li>
        <li className="nav-item px-2">OFERTAS</li>
      </ul>
    </div>
  );
}
