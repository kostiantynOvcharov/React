
import * as ALBUM_TYPES from '../types/albums';

const initialState = {
  data: [],
  isLoading: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALBUM_TYPES.REQUEST_ALBUMS_INIT:
      return {
        ...state,
        error: false,
        isLoading: true,
      };
    case ALBUM_TYPES.REQUEST_ALBUMS_SUCCESS:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case ALBUM_TYPES.REQUEST_ALBUMS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state
  }
}