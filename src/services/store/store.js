import {createStore, applyMiddleware }from 'redux'; 
import thunk from 'redux-thunk'; 
import rootReducer from './reducers'; 

import { composeWithDevTools } from 'redux-devtools-extension';

const enhancer = composeWithDevTools({ name: 'R_and_M', trace: true })(
  applyMiddleware(thunk)
);

export default function configureStore(preloadedState){
  return createStore(
    rootReducer,
    preloadedState,
    enhancer
  )
}