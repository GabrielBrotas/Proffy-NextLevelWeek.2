import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

import Input from '../../components/Input'

import logo from '../../assets/images/logo.svg'
import heartIcon from '../../assets/images/icons/purple-heart.svg'

function Login() {
    return (
        <div id="page-login" className="login-form">
            <aside>
                <img src={logo} alt="logo"/>
                <h2>Sua plataforma de estudos online</h2>
            </aside>
            
            <section>
                <div className="form-content">
                    <h2>Fazer login</h2>

                    <Input label="" name="email" placeholder="Email" />
                    <Input label="" name="password" placeholder="Senha"/>

                    <div className="login-options">
                        <div className="select-button">
                            <input type="checkbox" name="lembrar-senha" />
                            <label htmlFor="lembrar-senha">
                                Lembrar login
                            </label>
                        </div>

                        <Link to="/reset-password">
                            Esqueci minha senha
                        </Link>
                    </div>

                    <button>
                        Enviar
                    </button>

                    <footer className="login-footer-section">
                        <div className="register-page">
                            <p>Não tem uma conta ainda?</p>
                            <Link to='/register'>
                                Cadastre-se
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

export default Login
