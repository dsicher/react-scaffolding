import { actionTypes } from './actions';

const initialState = {
  counter: 0,
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return initialState;
    case actionTypes.INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}

export default reducer;
