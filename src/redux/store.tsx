import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootSaga from './sagas'
import { RootReducer, RootState } from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

let enhancer: any = null
if (process.env.NODE_ENV !== `production`) {
    if (typeof window !== 'undefined') {
        enhancer = composeWithDevTools(applyMiddleware(...middlewares))
    }
} else {
    enhancer = applyMiddleware(...middlewares)
}

const store = createStore(RootReducer, {}, enhancer)
sagaMiddleware.run(rootSaga)
export default store
