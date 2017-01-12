import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {routerMiddleware} from 'react-router-redux'
import reducers from 'code-typing/reducers'

export default (history) => {
  let middlewares = [thunk, routerMiddleware(history)]
  let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middlewares))
  return store
}
