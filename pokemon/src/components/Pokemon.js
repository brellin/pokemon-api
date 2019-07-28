import React from 'react'

const Pokemon = props => {
    return (
        <div className='pokemon'>
            <h3>{props.poke.name}</h3>
        </div>
    )
}

export default Pokemon
