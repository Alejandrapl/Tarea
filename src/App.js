import { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  const [pokemonName, setPokemonName] = useState("")
  const [searchImput, setSearchImput] = useState("")
  const [pokemonSprite, setPokemonSprite] = useState("")
  const [pokemonDataObject, setPokemonDataObject] = useState("")

  // this effect only works once when the components mounts
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      // data = {
      //   name,
      //   sprites: {
      //    front_default
      //   }
      // }
      const { name, sprites : {front_default} } = data;
      setPokemonName(name);
      setPokemonSprite(front_default);
    })
    .catch((err) => console.warn(err))
    return () => {

    }
  }, [])
  
  return (
  <section>
    <SearchBar 
    searchImput={searchImput}
    setSearchImput={setSearchImput}
    setPokemonName={setPokemonName}
    setPokemonSprite={setPokemonSprite}
    />
    <main>
      <h1>Pokemon: {pokemonName}</h1>
      <img src={pokemonSprite ? pokemonSprite : ''} alt="pokemon-sprite" />
    </main>
    

  </section>
  );
}

export default App;