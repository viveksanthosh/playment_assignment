import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

let reducer = (state = initialState.folders, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_FOLDER_LIST:
            return [...action.payload];
        default: return state;
    }
};

export default reducer;