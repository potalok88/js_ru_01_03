import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../ruducers'
import logger from '../middlewares/logger'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)

if (module.hot) {
    module.hot.accept('../ruducers', () =>
        store.replaceReducer(require('../ruducers').default)
    );
}


window.store = store

export default store