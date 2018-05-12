import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const store = (state = initialState) => createStore(rootReducer, state, applyMiddleware(reduxImmutableStateInvariant()));

export default store;