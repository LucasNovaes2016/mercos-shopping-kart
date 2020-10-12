import React from "react";
import { convertNumberToPrice } from "../../../../core/utils";

export default function PurchaseSectionTableItem({ item }: any) {
  console.log("item = ", item);

  return (
    <tr>
      <td>{item.nome}</td>
      <td className="text-right">{item.quantidade_escolhida}</td>
      <td> {item.observacao} </td>
      <td className="text-right">{"R$ " + item.valor_unitario}</td>
      <td className="text-right">
        {"R$ " +
          convertNumberToPrice(item.valor_unitario * item.quantidade_escolhida)}
      </td>
    </tr>
  );
}
