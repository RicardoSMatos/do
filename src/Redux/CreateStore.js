import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import ReduxPersist from '../Config/redux-persist'

export default (rootReducer) => {
  
  const middleware = []
  const enhancers = []

  /** logger middleware */
  middleware.push(createLogger());

  enhancers.push(applyMiddleware(...middleware))

  const store = createStore(rootReducer, compose(...enhancers));

  return {
    store,
  }
}

