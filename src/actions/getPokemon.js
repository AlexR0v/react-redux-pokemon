import axios from 'axios'
import { loadingPokemon, pokemonFail, pokemonSuccess } from '../reducers/pokemonReducer'

export const getPokemon = (pokemon) => async dispatch => {
  try {
    dispatch(loadingPokemon());

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    dispatch(pokemonSuccess(res.data))
  } catch (e) {
    dispatch(pokemonFail())
  }
}