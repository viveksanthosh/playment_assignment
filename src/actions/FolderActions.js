import ActionTypes from './actionTypes';

export function addFolder(name, path) {
    return {
        type: ActionTypes.ADD_FOLDER,
        data: {
            name,
            path
        }
    }
}