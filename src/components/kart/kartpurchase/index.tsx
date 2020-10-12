import React from "react";
import { useSelector } from "react-redux";
import { convertNumberToPrice } from "../../../core/utils";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export interface IKartPurchase {
  lista_produtos: any;
}

/* Componente para renderizar o card de finalização inicial dos pedidos escolhidos */

export default function KartPurchase({ lista_produtos }: IKartPurchase) {
  const history = useHistory();

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

  const handleChangeFinalizarCompra = () => {
    if (!getQuantidadeItems()) {
      toast.error("Não há items para serem comprados!");
      return;
    }
    history.push("/finalizacao-pedido");
  };

  return (
    <div className="kart-purchase border">
      <div className="kart-purchase-title">
        <span> RESUMO DO PEDIDO </span>
      </div>
      <div className="kart-purchase-info">
        <div className="d-flex justify-content-between">
          <div>Itens</div>
          <div>{getQuantidadeItems()}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Total em produtos</div>
          <div>R$ {convertNumberToPrice(getTotalEmProdutos())}</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Descontos</div>
          <div>R$ {convertNumberToPrice(getDescontoReais())}</div>
        </div>
      </div>
      <div className="kart-purchase-total">
        <div className="d-flex justify-content-between">
          <div> Total </div>
          <div>
            {" "}
            R$ {convertNumberToPrice(getTotalEmProdutos() - getDescontoReais())}
          </div>
        </div>
      </div>
      <div className="kart-purchase-button-div">
        <button
          className="btn primary-background kart-purchase-button btn-block text-white rounded-0"
          type="button"
          onClick={handleChangeFinalizarCompra}
        >
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}
