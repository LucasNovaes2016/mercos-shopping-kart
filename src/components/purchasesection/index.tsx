import React from "react";
import { useHistory } from "react-router-dom";
import PurchaseSectionTable from "./purchasesectiontable";

export interface IPurchaseSection {
  lista_produtos: any;
}

export default function PurchaseSection({ lista_produtos }: IPurchaseSection) {
  const history = useHistory();

  const handleChangeFinalizarCompra = () => {
    history.push("/");
  };

  return (
    <div className="container">
      <PurchaseSectionTable lista_produtos={lista_produtos} />
      <button
        className="btn primary-background kart-purchase-button btn-block text-white rounded-0"
        type="button"
        onClick={handleChangeFinalizarCompra}
      >
        Comprar
      </button>
    </div>
  );
}
