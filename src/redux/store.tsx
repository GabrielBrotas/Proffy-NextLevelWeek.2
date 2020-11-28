import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import userReducers from './reducers/userReducer'

export interface StateProps {
    users: {
        authenticated: boolean,
        credentials: {
            userId: number
            name: string, 
            avatar: string,
            email: string
        },
        loading: boolean
    }
}

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