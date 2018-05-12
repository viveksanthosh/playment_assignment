import actionTypes from '../actions/actionTypes';
import { updateFolders } from '../actions/FolderActions';

const middleware = store => next => action => {
  if (action.type === actionTypes.ADD_FOLDER){
    store.dispatch(updateFolders(action.payload.path));
  } else {
    next(action)
  }
}

export default middleware;