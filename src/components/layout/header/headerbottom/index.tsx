import React from "react";
import HeaderBottomMenuItems from "./headerbottommenuitems/HeaderBottomMenuItems";
import HeaderBottomSearchInput from "./headerbottomsearchinput";
import HeaderBottomKartTotal from "./headerbottomkarttotal";

export interface IHeaderBottom {
  lista_produtos: any;
}

/* Componente para renderizar a parte inferior do cabecalho */

export default function HeaderBottom({ lista_produtos }: IHeaderBottom) {
  return (
    <div className="header-bottom d-lg-flex justify-content-between">
      <div className="py-2">
        <HeaderBottomMenuItems />
      </div>
      <div>
        <HeaderBottomSearchInput />
      </div>
      <div>
        <HeaderBottomKartTotal lista_produtos={lista_produtos} />
      </div>
    </div>
  );
}
