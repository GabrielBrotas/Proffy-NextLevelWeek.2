import React, { FormEvent, useState } from 'react'

import api from '../../services/api'
// Components
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'

import './styles.css'

function TeacherList() {

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState([])

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();
        
        const response = await api.get('classes', {
            // passar querys via parametros
            params: {
                subject, 
                week_day,
                time
            }
        })

        setTeachers(response.data)
        
    }
    
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels">

                {/* Child do componente PageHeader */}
                <form id="search-teachers" onSubmit={searchTeachers}>

                    <Select
                        label="Matéira" 
                        name="subject" 
                        value={subject}
                        onChange={ e => setSubject(e.target.value)}
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
                        value={week_day}
                        onChange={ e => setWeekDay(e.target.value)}
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
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    />
                
                    <button type="submit">Buscar</button>
                        
                </form>

            </PageHeader>

            <main>

                {teachers.map( (teacher: Teacher) => (
                    <TeacherItem key={teacher.id} teacher={teacher} />
                ))}

            </main>
        </div>
    )
}


export default TeacherList
