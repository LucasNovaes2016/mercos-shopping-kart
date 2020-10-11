import React from "react";
import Logo from "./logo";
import HeaderBottom from "./headerbottom";
import HeaderTop from "./headertop";
import {
  numero_default,
  local_default,
  usuario_default,
} from "../../../core/data/local";

export default function Header() {
  return (
    <>
      <div className="container">
        <HeaderTop
          numero={numero_default}
          local={local_default}
          usuario={usuario_default}
        />
        <Logo />
        <HeaderBottom />
      </div>
    </>
  );
}
