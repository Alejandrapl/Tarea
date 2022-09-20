import React, { useEffect, useState } from 'react';

function Gei() {
    const [pokemonName, setPokemonName] = useState("")
    const [searchImput, setSearchImput] = useState("")

    useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/pikachu/`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        const { name } = data;
        setPokemonName(name);
    })
    .catch((err) => console.warn(err))
    return () => {

    }
    }, [])

    return (
    <section>
    <form 
    action="get" 
    method="get" 
    onSubmit={(e) => {
        e.preventDefault();
        console.log("submit event received")
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchImput}`)
        .then((res) => res.json())
        .then((data) => {
        setPokemonName(data.name)
        })
    }}>
        <input 
        type="text" 
        name="name" 
        value={searchImput} 
        placeholder="SEARCH..." 
        onChange={(e) => { setSearchImput(e.target.value) }} />
    </form>
    <h1>Pokemon: {pokemonName}</h1>
    </section>
    );
}

export default Gei;