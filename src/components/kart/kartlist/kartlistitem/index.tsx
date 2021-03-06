import React from "react";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Delete from "@material-ui/icons/Delete";
import { convertNumberToPrice } from "../../../../core/utils";
import { useDispatch } from "react-redux";
import {
  REMOVER_PRODUTO_CARRINHO,
  ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
  ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
} from "../../../../core/redux/types";
import { toast } from "react-toastify";

/* Componente para renderizar um item individual do carrinho de compras, bem como cuidar das suas logicas especificas */

export default function KartListItem({ produto_formatado }: any) {
  const [modoAdicionarObservacao, setModoAdicionarObservacao] = React.useState<
    boolean
  >(false);

  const dispatch = useDispatch();

  const removeProdutoCarrinho = (id: string) => {
    dispatch({
      type: REMOVER_PRODUTO_CARRINHO,
      payload: id,
    });

    toast.success(`O produto ${produto_formatado.nome} foi removido.`);
  };

  const handleChangeQuantidadeEscolhida = (operation: string) => {
    const nova_quantidade =
      operation === "plus"
        ? Math.min(
            produto_formatado.quantidade_escolhida + 1,
            produto_formatado.quantidade
          )
        : Math.max(produto_formatado.quantidade_escolhida - 1, 0);

    dispatch({
      type: ALTERAR_QUANTIDADE_PRODUTO_CARRINHO,
      payload: {
        id: produto_formatado.id,
        quantidade_escolhida: nova_quantidade,
      },
    });
  };

  const handleChangeObservacao = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: ADICIONAR_OBSERVACAO_PRODUTO_CARRINHO,
      payload: {
        id: produto_formatado.id,
        observacao: e.target.value,
      },
    });

    if (!e.target.value.length) setModoAdicionarObservacao(false);
  };

  return (
    <div className="kart-item" id={produto_formatado.id}>
      <div className="d-lg-flex justify-content-between">
        <img
          className="kart-item-img"
          src={produto_formatado.url_imagem}
          width="90"
          height="90"
          alt={produto_formatado.nome}
          title={produto_formatado.nome}
        />

        <div className="kart-item-info">
          <h1 className="kart-item-info-name">{produto_formatado.nome}</h1>
          <p className="kart-item-info-sku text-muted">
            {`SKU ${produto_formatado.sku}`}
          </p>

          <div
            style={{ cursor: "pointer" }}
            onClick={() => setModoAdicionarObservacao(!modoAdicionarObservacao)}
          >
            <ChatBubbleOutline className="primary-shade mr-1 primary-icon" />
            <p className="kart-item-info-obs primary-shade">
              {modoAdicionarObservacao ? "Remover" : "Adicionar"} Observação
            </p>
          </div>
          <input
            type="text"
            className={`form-control ${
              modoAdicionarObservacao ? "" : "d-none"
            }`}
            placeholder="Sua observação..."
            style={{ width: "150px" }}
            value={produto_formatado.observacao}
            onChange={handleChangeObservacao}
          />
        </div>

        <div className="kart-item-quantity align-top">
          <div className="input-group border rounded">
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-default btn-number"
                data-type="minus"
                data-field="quant[s1]"
                onClick={(e) => handleChangeQuantidadeEscolhida("minus")}
              >
                <Remove className="secondary-shade-3 primary-icon" />
              </button>
            </span>
            <input
              type="text"
              name="quant[1]"
              className="form-control input-number kart-item-quantity-number"
              value={produto_formatado.quantidade_escolhida}
              min="1"
              disabled
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-default btn-number"
                data-type="plus"
                data-field="quant[1]"
                onClick={(e) => handleChangeQuantidadeEscolhida("plus")}
              >
                <Add className="primary-shade primary-icon" />
              </button>
            </span>
          </div>
        </div>

        <div className="kart-item-price-trash">
          <div>
            R${" "}
            {convertNumberToPrice(
              produto_formatado.quantidade_escolhida *
                produto_formatado.valor_unitario
            )}
          </div>
          <div className="mt-4 text-right">
            <div
              className="ml-auto"
              style={{ cursor: "pointer" }}
              onClick={() => removeProdutoCarrinho(produto_formatado.id)}
            >
              <Delete className="primary-shade primary-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
