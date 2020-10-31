import { combineReducers } from 'redux'
import PokemonListReducer from './pokemonListReducer'
import pokemonReducer from './pokemonReducer'

const rootReducer = combineReducers({
  pokemonList: PokemonListReducer,
  pokemon: pokemonReducer
})

export default rootReducer
