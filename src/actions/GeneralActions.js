import ActionTypes from './actionTypes';
export function error(message = "Something terrible has happened") {
    return {
        type: ActionTypes.ERROR_OCCURED,
        payload: message
    }
}
