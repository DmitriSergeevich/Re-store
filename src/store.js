import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducers/reducer';
import thunkMiddleware from 'redux-thunk';

const stringMidlewere = () => next => action => {
  if(typeof(action) === 'string') {
    return next({ type: action });
  }

  return next(action);
}
 
export const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMidlewere));