import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducers from './reducers/userReducer'

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
    users: userReducers,
})

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware))
)

export default store