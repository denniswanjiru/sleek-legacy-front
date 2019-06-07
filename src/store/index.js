import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const configStore = () => {
  const middlewares = [thunk, logger];
  return createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(...middlewares)));
};

export default configStore;