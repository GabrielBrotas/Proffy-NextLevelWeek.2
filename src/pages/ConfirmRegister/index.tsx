import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.css'

import checkIcon from '../../assets/images/icons/success-check-icon.svg'
import Button from '../../components/Button'

function ConfirmRegister() {

    const history = useHistory()

    function pushToLoginPage() {
        history.push('/login')
    }

    return (
        <div className="confirm-register-content">
            <img src={checkIcon} alt="checked" />

            <h2>Cadastro Concluído</h2>
            <p>Bem vindo a nossa comunidade. Agora você pode assistir a aula de nossos Proffys e até se tornar um! </p>

            <Button text="Login" onClick={pushToLoginPage}/>
        </div>
    )
}

export default ConfirmRegister
