import { SET_AUTHENTICATION } from "../types"

const initialState = {
    authenticated: false,
    loading: true,
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

        default: 
            return state
    }
}