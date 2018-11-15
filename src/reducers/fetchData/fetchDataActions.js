export const FETCH_INSTRUMENTS_BEGIN   = 'FETCH_INSTRUMENTS_BEGIN';
export const FETCH_INSTRUMENTS_SUCCESS = 'FETCH_INSTRUMENTS_SUCCESS';
export const FETCH_INSTRUMENTS_FAILURE = 'FETCH_INSTRUMENTS_FAILURE';

export const fetchInstrumentsBegin = () => ({
  type: FETCH_INSTRUMENTS_BEGIN
});

export const fetchInstrumentsSuccess = instruments => ({
  type: FETCH_INSTRUMENTS_SUCCESS,
  payload: { instruments }
});

export const fetchInstrumentsFailure = error => ({
  type: FETCH_INSTRUMENTS_FAILURE,
  payload: { error }
});

export function fetchInstruments() {
  return dispatch => {
    dispatch(fetchInstrumentsBegin());
    return fetch("http://localhost:3012/instruments")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchInstrumentsSuccess(json.instruments));
        return json.instruments;
      })
      .catch(error => dispatch(fetchInstrumentsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}