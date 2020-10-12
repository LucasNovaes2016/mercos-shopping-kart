import React from "react";
import PurchaseSectionForm from "./purchasesectionform";
import PurchaseSectionTable from "./purchasesectiontable";

export interface IPurchaseSection {
  lista_produtos: any;
}

export default function PurchaseSection({ lista_produtos }: IPurchaseSection) {
  return (
    <div className="container">
      <PurchaseSectionTable lista_produtos={lista_produtos} />
      <PurchaseSectionForm lista_produtos={lista_produtos} />
    </div>
  );
}
