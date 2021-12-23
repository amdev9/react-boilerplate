import { createStore } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import rootReducer from './rootReducer'


const persistConfig = {
  key: "config",
  storage: localStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)

export default store;