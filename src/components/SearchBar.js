import React from "react";
import './SearchBar.css';

const SearchBar = (props) => {
 const { searchImput, setSearchImput, setPokemonName, setPokemonSprite } = props;
  return (
    <form
      action="get"
      method="get"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit event received");
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchImput}`)
          .then((res) => res.json())
          .then((data) => {
            setPokemonName(data.name);
            setPokemonSprite(data.sprites.front_default);
          });
      }}
    >
      <input
        type="text"
        name="name"
        value={searchImput}
        placeholder="SEARCH..."
        onChange={(e) => {
          setSearchImput(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchBar;