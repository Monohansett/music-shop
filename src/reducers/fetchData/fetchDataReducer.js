import {
    FETCH_INSTRUMENTS_BEGIN,
    FETCH_INSTRUMENTS_SUCCESS,
    FETCH_INSTRUMENTS_FAILURE
  } from './fetchDataActions';
  
  const initialState = {
    instruments: [],
    loading: false,
    error: null
  };
  
  export default function instrumentReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_INSTRUMENTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_INSTRUMENTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          instruments: action.payload.instruments
        };
  
      case FETCH_INSTRUMENTS_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          instruments: []
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }
