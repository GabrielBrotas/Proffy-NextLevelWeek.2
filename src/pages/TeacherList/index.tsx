import React from 'react'
import Input from '../../components/Input'

// Components
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels">

                {/* Child do componente PageHeader */}
                <form id="search-teachers">

                    <Select
                        label="Matéira" 
                        name="subject" 
                        options={[
                            { value: 'Artes', label: "Artes"},
                            { value: 'Matematica', label: "Matematica"},
                            { value: 'Ações', label: "Ações"},
                            { value: 'Investimentos', label: "Investimentos"},
                            { value: 'Educação Financeira', label: "Educação Financeira"},
                        ]}
                    />
                    
                    <Select
                        label="Dia da Semana" 
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

                    <Input 
                    type="time"
                    label="Horário" 
                    name="time" 
                    />
                
                </form>

            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}


export default TeacherList
