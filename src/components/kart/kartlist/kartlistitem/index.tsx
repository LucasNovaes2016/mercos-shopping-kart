import React from "react";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import Delete from "@material-ui/icons/Delete";

export default function KartListItem({ produto_formatado }: any) {
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
            {produto_formatado.sku}
          </p>

          <ChatBubbleOutline className="primary-shade mr-1" />
          <p className="kart-item-info-obs primary-shade">
            Adicionar Observação
          </p>
        </div>

        <div className="kart-item-quantity align-top">
          <div className="input-group border rounded">
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-default btn-number"
                data-type="minus"
                data-field="quant[s1]"
              >
                <Remove className="secondary-shade-3" />
              </button>
            </span>
            <input
              type="text"
              name="quant[1]"
              className="form-control input-number kart-item-quantity-number"
              value="1"
              min="1"
              disabled
              max={produto_formatado.quantidade}
            />
            <span className="input-group-btn">
              <button
                type="button"
                className="btn btn-default btn-number"
                data-type="plus"
                data-field="quant[1]"
              >
                <Add className="primary-shade" />
              </button>
            </span>
          </div>
        </div>

        <div className="kart-item-price-trash">
          <div>
            R${" "}
            {produto_formatado.quantidade_escolhida *
              produto_formatado.valor_unitario}
          </div>
          <div className="mt-4 text-right">
            <Delete className="primary-shade" />
          </div>
        </div>
      </div>
    </div>
  );
}
