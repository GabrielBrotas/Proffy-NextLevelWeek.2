import React from 'react'
import './styles.css'

import Input from '../../components/Input'

import Aside from '../../components/Aside'
import Button from '../../components/Button'

function ResetPassword() {
    return (
        <div id="reset-password" className="reset-password-form">
            
            <Aside />
            
            <section>
                <div className="form-content">
                    <h2>Eita, esqueceu sua senha?</h2>
                    <p>Nós enviaremos um email para você resetar sua senha.</p>

                    <Input label="" name="email" placeholder="Email" />
                    
                    <Button text="Enviar" />
                </div>
            </section>
        </div>
    )
}

export default ResetPassword
