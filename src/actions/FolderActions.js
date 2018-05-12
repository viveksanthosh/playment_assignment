import ActionTypes from './actionTypes';
import httpCalls from '../HttpHelpers'
export function addFolder(name, path) {
    return {
        type: ActionTypes.ADD_FOLDER,
        payload: httpCalls.addNewFolder(name, path)
    }
}

export function updateFolders(path) {
    return {
        type: ActionTypes.UPDATE_FOLDER_LIST,
        payload:  httpCalls.getFolders(path)
    }
}