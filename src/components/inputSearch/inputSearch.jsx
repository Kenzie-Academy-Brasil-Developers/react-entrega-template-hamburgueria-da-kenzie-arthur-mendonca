import { useState } from "react";
import { StyledForm } from "./inputSearch.js";

function InputSearch({ setSearchResult, searchResult }) {
  const [searchValue, setSearchValue] = useState("");

  const submit = (event) => {
    event.preventDefault();
    setSearchResult(searchValue);
    setSearchValue("");
    console.log(searchResult);
  };

  return (
    <StyledForm onSubmit={submit}>
      <label htmlFor="search"></label>
      <input
        type="search"
        id="search"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button type="submit">Pesquisar</button>
    </StyledForm>
  );
}

export default InputSearch;
