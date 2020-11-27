import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './styles.css'

import { useDispatch } from 'react-redux'
import { registerUser } from '../../redux/actions/userActions'

import Input from '../../components/Input'
import Aside from '../../components/Aside'
import Button from '../../components/Button'

import heartIcon from '../../assets/images/icons/purple-heart.svg'

function Register() {

    const dispatch = useDispatch();
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleRegisterUser() {
        const newUserData = {
            name: `${firstName} ${lastName}`,
            email,
            password,
            confirmPassword
        }
        dispatch(registerUser(newUserData, history));
    }

    return (
        <div id="page-register" className="register-form">
            
            <Aside />
            
            <section>
                <div className="form-content">
                    <h2>Cadastro</h2>
                    <p>Preencha os dados abaixo para começar.</p>

                    <Input 
                        label="" 
                        name="first-name" 
                        placeholder="Nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input 
                        label="" 
                        name="last-name" 
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input 
                        label="" 
                        name="email" 
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        label="" 
                        name="password" 
                        placeholder="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Input 
                        label="" 
                        name="confirm-password" 
                        placeholder="Confirmar Senha"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    
                    <Button text="Cadastrar" onClick={handleRegisterUser}/>

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
