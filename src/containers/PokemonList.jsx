import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemonList } from '../actions/getPokemonList'
import { Link } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

const PokemonList = ({ history }) => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()
  const pokemonList = useSelector(state => state.pokemonList)

  useEffect(() => {
    dispatch(getPokemonList(1))
  }, [dispatch])

  const ShowPokemonList = () => {
    if (pokemonList.loading) {
      return (
        <h1>Loading....</h1>
      )
    }
    if (pokemonList.data.length !== 0) {
      return (
        <div className={'list-wrapper'}>
          {pokemonList.data.map(el => {
            return (
              <div
                key={el.name}
                className={'pokemon-item'}
              >
                <p>{el.name}</p>
                <Link to={`/pokemon/${el.name}`}>View</Link>
              </div>
            )
          })}
        </div>
      )
    }
    if (pokemonList.errorMsg !== '') {
      return (
        <h1>{pokemonList.errorMsg}</h1>
      )
    }
    return (
      <h1>unable to get data</h1>
    )
  }
  return (
    <div>
      <div className={'search-wrapper'}>
        <p>Search: </p>
        <input
          type='text'
          onChange={e => setSearch(e.target.value)}
        />
        <button onClick={() => history.push(`/pokemon/${search}`)}>Search</button>
      </div>
      {ShowPokemonList()}
      {(pokemonList.data.length !== 0) && (
        <ReactPaginate
          pageCount={Math.ceil(pokemonList.count / 20)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          onPageChange={(data) => dispatch(getPokemonList(data.selected + 1))}
          containerClassName={'pagination'}
        />
      )}
    </div>
  )
}
export default PokemonList
