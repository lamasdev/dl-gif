import {
  SET_LOADING,
  SET_ERROR,
  RETRIEVE_GIFS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  gifsList: [],
  pagination: {},
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
        pagination: action.payload.pagination,
        gifsList: action.payload.data,
      };
    default:
      return state;
  }
};

export default gifsReducer;
