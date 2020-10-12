import React from "react";
import Search from "@material-ui/icons/Search";
import { useDispatch } from "react-redux";
import { SETAR_TEXTO_PESQUISADO } from "../../../../../core/redux/types";

/* Componente para renderizar a barra de pesquisa do cabecalho */

export default function HeaderBottomSearchInput() {
  const [textoPesquisa, setTextoPesquisa] = React.useState<string>("");

  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextoPesquisa(e.target.value);
    dispatch({
      type: SETAR_TEXTO_PESQUISADO,
      payload: e.target.value,
    });
  };

  return (
    <div className="input-group header-bottom-search-input">
      <input
        type="text"
        className="form-control search-input"
        placeholder="O que você procura?"
        value={textoPesquisa}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-white" type="button">
          <Search className="primary-icon" />
        </button>
      </div>
    </div>
  );
}
