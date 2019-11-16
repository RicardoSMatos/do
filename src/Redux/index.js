import { combineReducers, createStore } from 'redux'
import { persistReducer } from 'redux-persist'

import CreateStore from './CreateStore'
import ReduxPersist from '../Config/redux-persist'

/** Reducers */
export const reducers = combineReducers({
  task: require('./TaskRedux').reducer,
})

export default () => {
  let finalReducers = reducers

  if(ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig;
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store } = CreateStore(finalReducers)

  return store
}