import actionTypes from '../actions/actionTypes';

const middleware = store => next => async (action) => {
  let promiseWrapper = Promise.resolve(action.payload)
  try {
    let value = await promiseWrapper;
    action.payload = value
    next(action)
  } catch (e) {
    console.log('error in promise middleware ', e);
    store.dispatch({
      type: actionTypes.ERROR_OCCURED
    })
  }
}

export default middleware;