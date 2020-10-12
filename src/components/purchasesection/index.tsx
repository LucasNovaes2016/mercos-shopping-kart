import React from "react";
import PurchaseSectionForm from "./purchasesectionform";
import PurchaseSectionTable from "./purchasesectiontable";

export interface IPurchaseSection {
  lista_produtos: any;
}

/* Componente para renderizar a tela de pagamento e listar os produtos escolhidos */

export default function PurchaseSection({ lista_produtos }: IPurchaseSection) {
  return (
    <div className="container">
      <PurchaseSectionTable lista_produtos={lista_produtos} />
      <PurchaseSectionForm />
    </div>
  );
}
