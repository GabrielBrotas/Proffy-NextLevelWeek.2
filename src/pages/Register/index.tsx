import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Input from '../../components/Input'

import heartIcon from '../../assets/images/icons/purple-heart.svg'
import Aside from '../../components/Aside'

function Register() {
    return (
        <div id="page-register" className="register-form">
            
            <Aside />
            
            <section>
                <div className="form-content">
                    <h2>Cadastro</h2>
                    <p>Preencha os dados abaixo para começar.</p>

                    <Input label="" name="name" placeholder="Nome" />
                    <Input label="" name="last-name" placeholder="Sobrenome" />
                    <Input label="" name="email" placeholder="Email" />
                    <Input label="" name="password" placeholder="Senha"/>

            
                    <button>
                        Enviar
                    </button>

                    <footer className="login-footer-section">
                        <div className="register-page">
                            <p>Já tem uma conta?</p>
                            <Link to='/login'>
                                Entrar
                            </Link>
                        </div>

                        <div className="gratis-info">
                            <p>É de graça</p>
                            <img src={heartIcon } alt="purple heart" />
                        </div>
                    </footer>
                </div>
            </section>
        </div>
    )
}

export default Register
