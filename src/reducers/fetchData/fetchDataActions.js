import axios from 'axios';

// export function receiveData(json) {
//   return {
//     type: 'RECEIVE_DATA',
//     payload: json
//   }
// }

export function loadInstruments() {
  return (dispatch) => {
    return axios.get('http://localhost:3012/instruments').then(response => {
      dispatch({
        type: 'RECEIVE_DATA',
        data: response.data
      })
    })
  }
}