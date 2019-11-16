import { AsyncStorage } from 'react-native'

import ImmutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    blacklist: [],
    // whitelist: [],
    transform: [ImmutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
