import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from '../actions/getPokemon'

const Pokemon = (props) => {
  const pokemonName = props.match.params.pokemon
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemon)
  const pokemonState = useSelector(state => state.pokemon.data)
  useEffect(() => {
    dispatch(getPokemon(pokemonName))
  }, [dispatch, pokemonName])

  const ShowPokemon = () => {
    if (Object.keys(pokemonData.data).length !== 0) {
      return (
        <div className={'pokemon-wrapper'}>
          <div className={'item'}>
            <h1>Sprites</h1>
            <img
              src={pokemonState.sprites.front_default}
              alt=''
            />
            <img
              src={pokemonState.sprites.back_default}
              alt=''
            />
            <img
              src={pokemonState.sprites.front_shiny}
              alt=''
            />
            <img
              src={pokemonState.sprites.back_shiny}
              alt=''
            />
          </div>
          <div className='item'>
            <h1>Stats</h1>
            {pokemonState.stats.map(el => {
              return <p key={el.stat.name}>{el.stat.name} {el.base_stat}</p>
            })}
          </div>
          <div className='item'>
            <h1>Abilities</h1>
            {pokemonState.abilities.map(el => {
              return <p key={el.ability.name}>{el.ability.name}</p>
            })}
          </div>
        </div>
      )
    }

    if (pokemonState.loading) {
      return <p>Loading...</p>
    }

    if (pokemonState.errorMsg !== '') {
      return <p>{pokemonState.errorMsg}</p>
    }

    return <p>error getting pokemon</p>
  }
  return (
    <div className={'poke'}>
      <h1>{pokemonName}</h1>
      {ShowPokemon()}
    </div>
  )
}

export default Pokemon
