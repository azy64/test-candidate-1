import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import albumReducer, { fetchAlbum } from './albumReducer/albumReducer';

const store = createStore(albumReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchAlbum());
export default store;
