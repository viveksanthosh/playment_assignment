import ActionTypes from './actionTypes';
import httpCalls from '../HttpHelpers';

export function error(message = "Something terrible has happened") {
    return {
        type: ActionTypes.ERROR_OCCURED,
        payload: message
    }
}
