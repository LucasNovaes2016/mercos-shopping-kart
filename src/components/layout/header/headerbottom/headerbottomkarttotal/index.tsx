import React from "react";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import { convertNumberToPrice } from "../../../../../core/utils";

export interface IHeaderBottom {
  lista_produtos: any;
}

/* Componente para calcular e renderizazr o preco total a ser pago pelo cliente (já com os descontos) */

export default function HeaderBottomKartTotal({
  lista_produtos,
}: IHeaderBottom) {
  const produtos_carrinho = useSelector(
    (state: any) => state.shopping_kart_reducer.produtos_carrinho
  );

  const getQuantidadeItems = (): number => {
    return produtos_carrinho.reduce(
      (acc: any, cur: any) => acc + cur.quantidade_escolhida,
      0
    );
  };

  const getPrecoProduto = (id: number): number => {
    if (lista_produtos.find((produto: any) => produto.id === id)) {
      return lista_produtos.find((produto: any) => produto.id === id)
        .valor_unitario;
    }

    return 0;
  };

  const getTotalEmProdutos = (): number => {
    let total_em_produtos = 0;

    produtos_carrinho.forEach((produto_carrinho: any) => {
      if (produto_carrinho.quantidade_escolhida) {
        const preco_produto = getPrecoProduto(produto_carrinho.id);

        const total_produto =
          preco_produto * produto_carrinho.quantidade_escolhida;
        total_em_produtos += total_produto;
      }
    });

    return total_em_produtos;
  };

  const getDescontoReais = (): number => {
    if (getQuantidadeItems() >= 50) return (getTotalEmProdutos() / 100) * 20;
    else if (getTotalEmProdutos() >= 200)
      return (getTotalEmProdutos() / 100) * 10;
    else return 0;
  };

  return (
    <div className="header-bottom-kart-total py-2">
      <ShoppingCart className="primary-shade secondary-icon" /> {"R$ "}
      {convertNumberToPrice(getTotalEmProdutos() - getDescontoReais())}
    </div>
  );
}
