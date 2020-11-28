import { GET_CLASSES } from "../types"

const initialState = {
    classes: []
}

interface ActionProps {
    type: string;
    payload: any
}

export default function classesReducer(state = initialState, action: ActionProps) {
    switch (action.type) {

        case GET_CLASSES:
            return {classes: action.payload};

        default: 
            return state
    }
}