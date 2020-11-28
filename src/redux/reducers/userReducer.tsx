import { SET_AUTHENTICATION, SET_UNAUTHENTICATED } from "../types"

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
}

interface ActionProps {
    type: string;
    payload: any
}

export default function userReducer(state = initialState, action: ActionProps) {
    switch (action.type) {

        case SET_AUTHENTICATION:
            return {authenticated: true, loading: false, credentials: action.payload};

        case SET_UNAUTHENTICATED:
            return {authenticated: false, loading: false, credentials: {}};
        default: 
            return state
    }
}