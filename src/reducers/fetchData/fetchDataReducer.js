
const initialState = {
  instruments: [],
};

export default function instrumentReducer(state = initialState, action) {
  if (action.type === 'RECEIVE_DATA') {
    return {
      ...state,
      instruments: action.data
    }
  } else return state
}



