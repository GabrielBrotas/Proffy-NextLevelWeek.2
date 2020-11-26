import jwtDecode from "jwt-decode"
import { Dispatch } from "redux"
import api from "../../services/api"
import { CLEAR_ERRORS, SET_ERRORS, SET_AUTHENTICATION } from "../types"

interface HistoryProps {
    push: Function
}

interface DecodedTokenProps {
    user: Object
}

export const loginUser = (userData: Object, history: HistoryProps) => (dispatch: Function) => {

    api.post('/login', userData)
        .then( res => {
            setAuthorizationHeader(res.data.token)
            dispatch({type: CLEAR_ERRORS})
            dispatch(getUserData(res.data.token))
            history.push('/')
        })
        .catch( err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const getUserData = (token: string) => (dispatch: Dispatch) => {
    const decodedToken: DecodedTokenProps = jwtDecode(token);
    dispatch({type: SET_AUTHENTICATION, payload: decodedToken.user});
    api.defaults.headers.common['Authorization'] = token
}

const setAuthorizationHeader = (token: string) => {
    const LSIdToken = `Bearer ${token}`
    localStorage.setItem('LSIdToken', LSIdToken)

    api.defaults.headers.common['Authorization'] = LSIdToken
}