const init = {
  album: [],
};

const albumReducer = (state = init, action) => {
  switch (action.type) {
    case 'GET_ALBUM':
      return {
        ...state,
        album: action.payload,
      };
    default:
      return state;
  }
};
export function getAlbum(data) {
  return {
    type: 'GET_ALBUM',
    payload: data,
  };
}

export const fetchAlbum = () => async (dispatch) => {
  const URL = 'https://itunes.apple.com/search?term=radiohead.';
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      dispatch(getAlbum(data.results));
    });
};

export default albumReducer;
