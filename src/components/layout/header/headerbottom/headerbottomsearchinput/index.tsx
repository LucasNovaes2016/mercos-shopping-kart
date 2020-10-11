import React from "react";
import Search from "@material-ui/icons/Search";

export default function HeaderBottomSearchInput() {
  return (
    <div className="input-group header-bottom-search-input">
      <input
        type="text"
        className="form-control search-input"
        placeholder="O que você procura?"
      />
      <div className="input-group-append">
        <button className="btn btn-white" type="button">
          <Search />
        </button>
      </div>
    </div>
  );
}
