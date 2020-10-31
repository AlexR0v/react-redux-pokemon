import axios from 'axios'
import { loadingPokemonList, pokemonListFail, pokemonListSuccess } from '../reducers/pokemonListReducer'

export const getPokemonList = (page) => async dispatch => {
  try {
    dispatch(loadingPokemonList())

    const perPage = 15;
    const offset = (page * perPage) - perPage;

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${offset}`)

    dispatch(pokemonListSuccess(res.data))
  } catch (e) {
    dispatch(pokemonListFail())
  }
}
