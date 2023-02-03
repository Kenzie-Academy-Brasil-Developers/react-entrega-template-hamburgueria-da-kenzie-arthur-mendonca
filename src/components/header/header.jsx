import { useState } from "react";
import logo from "../../assets/logo-hamburguer.svg";
import { StyledHeader } from "./header.js";
import InputSearch from "../inputSearch/inputSearch.jsx";

function Header({ searchResult, setSearchResult }) {
  return (
    <StyledHeader>
      <div className="img__div">
        <img src={logo} alt="logo-Burguer-kenzie" />
      </div>
      <InputSearch
        className="inputSearch"
        setSearchResult={setSearchResult}
        searchResult={searchResult}
      />
    </StyledHeader>
  );
}

export default Header;
