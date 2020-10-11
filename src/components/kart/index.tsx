import React from "react";
import KartList from "./kartlist";
import KartTitle from "./karttitle";

export default function Kart() {
  return (
    <div className="container">
      <KartTitle />
      <div className="row">
        <div className="col-md-8">
          <KartList />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
