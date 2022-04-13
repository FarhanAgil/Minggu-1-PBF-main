import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import SamStoreApp from '../reducers/products'

const store = createStore(SamStoreApp, applyMiddleware(thunkMiddleware))

export default store