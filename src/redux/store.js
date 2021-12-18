import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from "redux"
import { rootSaga } from "./rootSaga";
import { rootReducer } from "./reducer/combineReducer"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const { NODE_ENV } = process.env

export const store = NODE_ENV === "development" ? 
                     createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware))) : 
                     createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)