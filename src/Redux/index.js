import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'

import configStore from './CreateStore'
import ReduxPersist from '../Config/redux-persist'

/** Reducers */
export const reducers = combineReducers({
  task: require('./TaskRedux').reducer,
  auth: require('./AuthRedux').reducer,
})

export default () => {
  let finalReducers = reducers

  if(ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store } = configStore(finalReducers)
  let persistor = persistStore(store)

  return {
    store,
    persistor,
  }
}