import folderReducer from './folderReducer';
import {combineReducers} from 'redux';

let rootReducer = combineReducers({
    folderData: folderReducer
});

export default rootReducer;