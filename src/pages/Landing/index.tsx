import React, { useEffect, useState } from 'react'

// O link impede que a pagina seja carregada toda novamente e só renderiza o necessario, diferento da tag html <a href />
import {Link} from 'react-router-dom'

// imagens
import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

// style
import './styles.css'
import api from '../../services/api'

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect( () => {
        api.get('/connections').then( res => {
            setTotalConnections( res.data.total )
        })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="page-top-content">
                    <header className="header-user">
                        <img 
                            src="https://avatars1.githubusercontent.com/u/63565773?s=460&u=47a9f80c4fc321d44adcc314993d9ebfe8a64497&v=4"
                            alt="avatar"
                        />

                        <span>Gabriel Brotas</span>
                    </header>
                    
                    
                    <div className="logo-content">
                        <img src={logoImg} alt="logo" />
                            <h2>Sua Plataforma de estudos online</h2>
                    </div>

                    <img 
                        src={landingImg}
                        alt="Plataforma de estudos"
                        className="hero-image"
                    />

                </div>
                
                <div className="page-bottom-content">
                    <div className="welcome-message">
                        
                        <h2>
                            Seja bem-vindo
                            <br />
                            <strong>O que deseja fazer?</strong>
                        </h2>                        
                        

                        <span className="total-connections">
                            Total de {totalConnections} conexões já realizadas 
                            <img src={purpleHeartIcon} alt="Coração Roxo" />
                        </span>
                    </div>
                    
                    <div className="buttons-container">
                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar" />
                            Estudar
                        </Link>

                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassesIcon} alt="Dar Aulas" />
                            Dar Aulas
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default Landing 