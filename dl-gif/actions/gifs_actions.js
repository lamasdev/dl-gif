import axios from '../axios-gif';
import {
  SET_LOADING,
  SET_ERROR,
  RETRIEVE_GIFS_SUCCESS,
} from './types';
import {
  GIPHY_API_KEY,
} from '../config/config';

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
        api_key: GIPHY_API_KEY,
        limit,
        lang,
        q: search,
      },
    }).then((response) => {
      const data = response.data;
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

export default retrieveGifs;
