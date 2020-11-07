import React from 'react'

import whatsappIcon from '../../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/63565773?s=460&u=47a9f80c4fc321d44adcc314993d9ebfe8a64497&v=4" alt="Gabriel" />

                        <div>
                            <strong>Gabriel Brotas</strong>
                            <span>Empreendorismo</span>
                        </div>
                    </header>

                    <p>
                        Especialista em educação financeira e gerenciamento de Negócios.
                        <br />
                        Inscreva - se para aprender tudo sobre gestão de negócios e como faturar muito com franquias.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Contato Wpp" />
                            Entrar em Contato
                        </button>
                    </footer>
                </article>
    )
}


export default TeacherItem