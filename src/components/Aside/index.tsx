import React from 'react'

import './styles.css'

import logo from '../../assets/images/logo.svg'

export default function Aside() {
    return (
        <aside>
            <img src={logo} alt="logo"/>
            <h2>Sua plataforma de estudos online</h2>
        </aside>
    )
}
