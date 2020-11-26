import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

import { useDispatch } from 'react-redux'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Aside from '../../components/Aside'

import heartIcon from '../../assets/images/icons/purple-heart.svg'
import eyesIcon from '../../assets/images/icons/eyes.svg'
import closedEyesIcon from '../../assets/images/icons/closed-eyes.svg'
import { loginUser } from '../../redux/actions/userActions'

function Login() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLoginUser() {
        const userData = {email, password}
        dispatch(loginUser(userData, history))
    }

    return (
        <div id="page-login" className="login-form">
            
            <Aside />
            
            <section>
                <div className="form-content">
                    <h2>Fazer login</h2>
                    
                    <Input 
                        label="" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <div className="password-input">
                        <Input 
                            type={showPassword ? "text" : "password"}
                            label="" 
                            name="password" 
                            placeholder="Senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <img 
                            src={showPassword ? eyesIcon : closedEyesIcon} 
                            alt="show password"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                    

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

                    <Button text="Log In" onClick={handleLoginUser} />

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
