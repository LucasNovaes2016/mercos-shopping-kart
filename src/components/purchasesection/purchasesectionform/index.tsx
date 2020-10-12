import React from "react";
import { useHistory } from "react-router-dom";

export interface IPurchaseSectionForm {
  lista_produtos: any;
}

export default function PurchaseSectionForm({
  lista_produtos,
}: IPurchaseSectionForm) {
  const history = useHistory();
  const handleChangeFinalizarCompra = () => {
    history.push("/");
  };

  return (
    <div className="purchase-section-form">
      <form>
        <div className="form-group row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
            />
          </div>
        </div>
      </form>
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
