import { AsyncStorage } from 'react-native'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import ImmutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';

const REDUX_PERSIST = {
  active: true,
  storeConfig: {
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage: AsyncStorage,
    blacklist: [],
    // whitelist: [],
    transform: [ImmutablePersistenceTransform]
  }
}

export default REDUX_PERSIST
