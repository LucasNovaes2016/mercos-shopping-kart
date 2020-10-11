import React from "react";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

export default function HeaderBottomKartTotal() {
  return (
    <div className="header-bottom-kart-total py-2">
      <ShoppingCart className="primary-shade" /> R$ 62,50
    </div>
  );
}
