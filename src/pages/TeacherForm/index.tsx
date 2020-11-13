import React, {useState} from 'react'
import Input from '../../components/Input'

import PageHeader from '../../components/PageHeader'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import './styles.css'
import warningIcon from '../../assets/images/icons/warning.svg'


function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        {week_day: 0, from: "", to:""},
    ])

    function addNewScheduleItems() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 3, from: "7:00", to: "8:00"}
        ])
    }

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
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Artes', label: "Artes"},
                            { value: 'Matematica', label: "Matematica"},
                            { value: 'Ações', label: "Ações"},
                            { value: 'Investimentos', label: "Investimentos"},
                            { value: 'Educação Financeira', label: "Educação Financeira"},
                        ]}
                    />
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>
                
                <fieldset>
                    {/* titulo para o fieldset */}
                    <legend>Horários Disponíveis
                        <button type="button" onClick={addNewScheduleItems}>
                        + Novo Horário
                        </button>
                    </legend>
                    
                    {scheduleItems.map( scheduleItem => (
                        <div className="schedule-item" key={scheduleItem.week_day}>
                        <Select 
                            label="Dia da semana" 
                            name="week_day" 
                            options={[
                                { value: '0', label: "Domingo"},
                                { value: '1', label: "Segunda-Feira"},
                                { value: '2', label: "Terça-Feira"},
                                { value: '3', label: "Quarta-Feira"},
                                { value: '4', label: "Quinta-Feira"},
                                { value: '5', label: "Sexta-Feira"},
                                { value: '6', label: "Sábado"},
                            ]}
                        />
                        <Input label="Das " name="from" type="time" />
                        <Input label="Até " name="to" type="time" />
                    </div>
                    ))}
                    
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