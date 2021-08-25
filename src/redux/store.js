import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const composedEnhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, composedEnhancer)

sagaMiddleware.run(rootSaga)

export default store