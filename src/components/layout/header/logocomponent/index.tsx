import React from "react";
import { generic_logo_base_64 } from "../../../../core/data/local";

export default function LogoComponent() {
  return (
    <div className="text-center logo-component">
      <img src={generic_logo_base_64} alt="Logo da Empresa" />
    </div>
  );
}
