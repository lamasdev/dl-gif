import {
  SET_LOADING,
  SET_ERROR,
  RETRIEVE_GIFS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  gif: null,
  gifsList: null,
  paginator: null,
  error: null,
  loading: false,
};

const gifsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true, error: null };
    case SET_ERROR:
      return { ...state, loading: false, error: action.payload };
    case RETRIEVE_GIFS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        paginator: action.payload,
        gifsList: action.payload.data,
      };
    /* case RETRIEVE_GIFS_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        gif: action.payload,
      }; */
    default:
      return state;
  }
};

export default gifsReducer;
