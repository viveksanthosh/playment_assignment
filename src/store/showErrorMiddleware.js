import actionTypes from '../actions/actionTypes';

const middleware = store => next => action => {
  if (action.type === actionTypes.ERROR_OCCURED){
    //TODO: replace with a tost mesage
   alert(action.payload)
  } else {
    next(action)
  }
}

export default middleware;