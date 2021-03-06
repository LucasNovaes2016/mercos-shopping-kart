import React from "react";
import KartList from "./kartlist";
import KartPurchase from "./kartpurchase";
import KartTitle from "./karttitle";

export interface IKart {
  lista_produtos: any;
}

/* Componente para renderizar todo o carrinho de compras */

export default function Kart({ lista_produtos }: IKart) {
  return (
    <div className="container">
      <KartTitle />
      <div className="row">
        <div className="col-lg-8">
          <KartList lista_produtos={lista_produtos} />
        </div>
        <div className="col-lg-4">
          <KartPurchase lista_produtos={lista_produtos} />
        </div>
      </div>
    </div>
  );
}
