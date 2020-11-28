import api from "../../services/api"

import {HistoryProps} from './userActions'

export const createNewClass = (userData: Object, history: HistoryProps) => (dispatch: Function) => {
    api.post('/classes', userData)
    .then( () => {
        alert("class created with success")
        history.push('/study')
    }).catch( err => {
        console.log(err)
    })

}