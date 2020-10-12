import React from "react";

export default function KartPurchase() {
  return (
    <div className="kart-purchase border">
      <div className="kart-purchase-title">
        <span> RESUMO DO PEDIDO </span>
      </div>
      <div className="kart-purchase-info">
        <div className="d-flex justify-content-between">
          <div>Itens</div>
          <div>5</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Total em produtos</div>
          <div>R$ 62,50</div>
        </div>
        <div className="d-flex justify-content-between">
          <div>Descontos</div>
          <div>R$ 0,00</div>
        </div>
      </div>
      <div className="kart-purchase-total">
        <div className="d-flex justify-content-between">
          <div> Total </div>
          <div> R$ 62,50 </div>
        </div>
      </div>
      <button
        className="btn primary-background kart-purchase-button btn-block text-white rounded-0"
        type="button"
      >
        Finalizar Compra
      </button>
    </div>
  );
}
