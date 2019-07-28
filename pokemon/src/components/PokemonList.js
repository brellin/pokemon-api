import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Pokemon from './Pokemon'

const PokemonList = props => {
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then(res => setPokemonList([
                ...res.data.results.map((poke, id) => {
                    return {
                        ...poke,
                        id: id + 1
                    }
                })
            ]))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {pokemonList.map(poke => (
                <Link to={`/${poke.id}`}>
                    <Pokemon poke={poke} key={poke.id} />
                </Link>
            ))}
        </>
    )
}

export default PokemonList
