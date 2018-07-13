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

export function retrieveGifs(search, lang, limit) {
  const url = '/v1/gifs/search';
  return function (dispatch) {
    dispatch({ type: SET_LOADING });
    axios({
      method: 'get',
      url,
      params: {
        api_key: 'qxbbq7WXPxGyY6UMtbQYHgjsAZDjZ1JV',
        limit,
        lang,
        q: search,
      },
      /* headers: {
        'Content-Type': 'application/json',
        Accept: 'application/x.babylimit.v1.0.0+json',
        Authorization: localStorage.getItem('token'),
      }, */

    }).then((response) => {
      const data = response.data;
      console.log(response);
      dispatch(retrieveSuccess(data, RETRIEVE_GIFS_SUCCESS));
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
