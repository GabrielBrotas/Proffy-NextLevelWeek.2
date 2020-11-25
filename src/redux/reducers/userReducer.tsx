const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
}

interface ActionProps {
    type: string,
}

export default function(state = initialState, action: ActionProps) {
    switch (action.type) {
        default: 
            return state
    }
}