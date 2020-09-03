import * as actionTypes from "../actions";

const initialState = {
  results: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date().getTime(),
          value: action.result,
        }),
      };
    case actionTypes.DELTE_RESULT:
      const updateArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updateArray,
      };
    default:
      return state;
  }
};

export default reducer;
