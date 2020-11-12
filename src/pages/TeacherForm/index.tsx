import React from 'react'
import Input from '../../components/Input'

import PageHeader from '../../components/PageHeader'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Que incrível que você quer dar aulas"
            description="O primeiro passo é preencher esse formulário de inscrição."
            />
            {/* conteudo principal da pag */}
            <main>
                {/* fieldset é um conjunto para representar um bloco dentro de um formulário */}
                <fieldset>
                    {/* titulo para o fieldset */}
                    <legend>Seus dados</legend>
                    <Input label="Nome Completo" name="name" />
                    <Input label="Avatar" name="avatar"/>
                    <Input label="Whatsapp" name="whatsapp"/>
                    <Textarea label="Biografia" name="bio" />
                </fieldset>
                
                <fieldset>
                    {/* titulo para o fieldset */}
                    <legend>Sobre a Aula</legend>
                    <Input label="subject" name="Matéria" />
                    <Input label="cost" name="Custo da sua hora por aula"/>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Important! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>

        </div>
    )
}

export default TeacherForm