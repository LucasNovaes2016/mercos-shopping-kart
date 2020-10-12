import React from "react";
import Logo from "./logo";
import HeaderBottom from "./headerbottom";
import HeaderTop from "./headertop";
import {
  numero_default,
  local_default,
  usuario_default,
} from "../../../core/data/local";

export interface IHeader {
  lista_produtos: any;
}

export default function Header({ lista_produtos }: IHeader) {
  return (
    <>
      <div className="header fixed-top bg-white">
        <div className="container">
          <HeaderTop
            numero={numero_default}
            local={local_default}
            usuario={usuario_default}
          />
          <Logo />
          <HeaderBottom lista_produtos={lista_produtos} />
        </div>
      </div>
    </>
  );
}
