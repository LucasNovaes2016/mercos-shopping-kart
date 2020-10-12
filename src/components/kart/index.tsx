import React from "react";
import KartList from "./kartlist";
import KartPurchase from "./kartpurchase";
import KartTitle from "./karttitle";

export interface IKart {
  lista_produtos: any;
}

export default function Kart({ lista_produtos }: IKart) {
  return (
    <div className="container">
      <KartTitle />
      <div className="row">
        <div className="col-lg-8">
          <KartList lista_produtos={lista_produtos} />
        </div>
        <div className="col-lg-4">
          <KartPurchase />
        </div>
      </div>
    </div>
  );
}
