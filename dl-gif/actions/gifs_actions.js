import axios from '../axios-gif';
import {
  SET_LOADING,
  SET_ERROR,
  RETRIEVE_GIFS_SUCCESS,
} from './types';

const retrieveSuccess = (object, action) => (
  {
    type: action,
    payload: object,
  }
);

const retieveFail = error => (
  {
    type: SET_ERROR,
    payload: error,
  }
);

export function retrieveGifs() {
  const url = '';
  return function (dispatch) {
    dispatch({ type: SET_LOADING });
    axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/x.babylimit.v1.0.0+json',
        Authorization: localStorage.getItem('token'),
      },
    }).then((response) => {
      const paginatorResponse = response.data.data;
      dispatch(retrieveSuccess(paginatorResponse, RETRIEVE_GIFS_SUCCESS));
    }).catch((error) => {
      if (error !== undefined) {
        if (error.response !== undefined) {
          dispatch(retieveFail(error.response.data.message));
        }
      }
    });
  };
}

export function other() {
  return true;
}
