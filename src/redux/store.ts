import { createStore, applyMiddleware } from 'redux'
import { persistReducer } from 'redux-persist'
import localStorage from 'redux-persist/es/storage'
import rootReducer from './rootReducer'
import createSagaMiddleware from '@redux-saga/core'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "config",
  storage: localStorage
}

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const enhancers = [];
if (middleware.length > 0) {
  enhancers.push(applyMiddleware(...middleware));
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools(...enhancers))

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch

export default store;