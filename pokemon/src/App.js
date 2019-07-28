import React from 'react'
import { Route, Link } from 'react-router-dom'

import PokemonList from './components/PokemonList'
import PokeDetails from './components/PokeDetails'
import Login from './components/Login'

import './App.scss'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokemon</h1>
        <Link to='/login'>Login</Link>
      </header>
      <div className='routes'>
        <Route exact path='/' component={PokemonList} />
        <Route
          path='/:id'
          render={props => <PokeDetails id={props.match.params.id} />}
        />
        <Route path='/login' component={Login} />
      </div>
    </div>
  )
}

export default App
