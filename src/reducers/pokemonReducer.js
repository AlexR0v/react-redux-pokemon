const DefaultState = {
  loading: false,
  data: {},
  errorMsg: ""
};

const pokemonReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case "POKEMON_LOADING":
      return {
        ...state,
        loading: true,
        errorMsg: ""
      };
    case "POKEMON_FAIL":
      return {
        ...state,
        loading: false,
        errorMsg: "unable to find pokemon"
      };
    case "POKEMON_SUCCESS":
      return {
        ...state,
        loading: false,
        errorMsg: "",
        data: action.payload
      };
    default:
      return state
  }
};

export const loadingPokemon = () => ({ type: "POKEMON_LOADING" })
export const pokemonFail = () => ({ type: "POKEMON_FAIL" })
export const pokemonSuccess = (data) => ({ type: "POKEMON_SUCCESS", payload: data})

export default pokemonReducer