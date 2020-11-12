import React from 'react'

import {Link} from 'react-router-dom'

import logoImg from '../../../assets/images/logo.svg'
import backIcon from '../../../assets/images/icons/back.svg'

import './styles.css'
 
// definir o formato dos types e propriedades que vai receber a const
interface PageHeaderProps {
    // Neste caso o title é obrigatorio, se fosse opcional faria assim -> title?: string.
    title: string;
    description?: string; // descrição opcional
}

// React.FC = react.functioncomponent = componente escrito em formato de função
// dentro do <> fica as propriedades que o componente pode receber
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/" >
                    <img src={backIcon} alt="voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>
    
            <div className="header-content">
                
                <strong>{props.title}</strong>
                
                {props.description && <p>{props.description}</p>}

                {props.children}
                
            </div>
        </header>
    )
}

export default PageHeader
