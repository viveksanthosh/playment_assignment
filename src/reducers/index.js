import folderReducer from './folderReducer';
import {combineReducers} from 'redux';

let rootReducer = combineReducers({
    folders: folderReducer
});

export default rootReducer;