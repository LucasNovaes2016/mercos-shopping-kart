import React from "react";
import LogoComponent from "./logocomponent";
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
      <HeaderTop
        numero={numero_default}
        local={local_default}
        usuario={usuario_default}
      />
      <LogoComponent />
      <HeaderBottom />
    </>
  );
}
