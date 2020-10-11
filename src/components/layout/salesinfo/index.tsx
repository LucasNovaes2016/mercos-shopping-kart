import React from "react";
import { ISalesInfo } from "../../../core/interfaces";
import Person from "@material-ui/icons/LocalShipping";
import LocalOffer from "@material-ui/icons/LocalOffer";
import CreditCard from "@material-ui/icons/CreditCard";

export default function SalesInfo({
  delivery_info,
  desconto_info,
  pagamento_info,
}: ISalesInfo) {
  return (
    <div className="container-fluid sales-info">
      <div className="container">
        <div className="row py-3">
          <div className="col-md-4">
            <div className="sales-info-item sales-info-item-right">
              <Person className="secondary-shade-3 mr-1" />
              {delivery_info}
            </div>
          </div>

          <div className="col-md-4">
            <div className="sales-info-item sales-info-item-center">
              {" "}
              <LocalOffer className="secondary-shade-3 mr-1" />
              {desconto_info}
            </div>
          </div>
          <div className="col-md-4">
            <div className="sales-info-item sales-info-item-left">
              {" "}
              <CreditCard className="secondary-shade-3 mr-1" /> {pagamento_info}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
