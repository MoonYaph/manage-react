import { combineReducers } from 'redux'
import auth from './auth'
import app from './app'
import shop from './shop'

export const makeRootReducer = asyncReducers =>
  combineReducers({
    auth,
    app,
    shop,
    ...asyncReducers,
  })

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
