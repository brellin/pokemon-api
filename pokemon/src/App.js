import React from 'react'
import { Route } from 'react-router-dom'
import PokemonList from './components/PokemonList'
import PokeDetails from './components/PokeDetails'

import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokemon</h1>
      </header>
      <div className='routes'>
        <Route exact path='/' component={PokemonList} />
        <Route
          path='/:id'
          render={props => <PokeDetails id={props.match.params.id} />}
        />
      </div>
    </div>
  )
}

export default App
