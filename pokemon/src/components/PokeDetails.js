import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokeDetails = props => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${props.id}`)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(pokemon)

    return (
        <div>
            <h1>{pokemon.name}</h1>
        </div>
    )
}

export default PokeDetails
