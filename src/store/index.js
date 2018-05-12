import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import refreshFoldersMiddleWare from './refreshFoldersMiddleware';
import resovePromiseMiddleware from './resovePromiseMiddleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = (state = initialState) => createStore(rootReducer, state, applyMiddleware(
    reduxImmutableStateInvariant(),
    resovePromiseMiddleware,
    refreshFoldersMiddleWare
));

export default store;