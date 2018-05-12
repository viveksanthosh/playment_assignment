import ActionTypes from '../actions/actionTypes';
import initialState from './initialState';

let reducer = (state = initialState.folderData, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_FOLDER_LIST:
            return {
                path: action.payload.path,
                folders: [...action.payload.folders]
            };
        default: return state;
    }
};

export default reducer;