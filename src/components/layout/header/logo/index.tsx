import React from "react";
import { generic_logo_base_64 } from "../../../../core/data/local";

/* Componente para renderizar o logo da empresa */

export default function Logo() {
  return (
    <div className="text-center logo">
      <img src={generic_logo_base_64} alt="Logo da Empresa" />
    </div>
  );
}
