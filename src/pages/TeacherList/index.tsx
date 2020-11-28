import React, { useEffect, useState } from 'react'

// Components
import PageHeader from '../../components/PageHeader'
import Select from '../../components/Select'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'

import './styles.css'
import { useDispatch, useSelector } from 'react-redux'
import { StateProps } from '../../redux/store'
import { getTeacherList } from '../../redux/actions/classesActions'

function TeacherList() {

    const dispatch = useDispatch();

    const {classList} = useSelector((state: StateProps) => state.classes)

    const [subject, setSubject] = useState('')
    const [week_day, setWeekDay] = useState('')
    const [time, setTime] = useState('')
    const [teachers, setTeachers] = useState([])

    useEffect( () => {
        dispatch(getTeacherList(subject, week_day, time))
    }, [dispatch, subject, week_day, time])

    useEffect( () => {
        setTeachers(classList)
    }, [classList])

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels" tag="Estudar">

                {/* Child do componente PageHeader */}
                <fieldset id="search-teachers">

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
                            { value: '1', label: "Segunda"},
                            { value: '2', label: "Terça"},
                            { value: '3', label: "Quarta"},
                            { value: '4', label: "Quinta"},
                            { value: '5', label: "Sexta"},
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
        
                </fieldset>

            </PageHeader>

            <main>
                {teachers.length > 0 ? (
                    teachers.map( (teacher: Teacher) => (
                        <TeacherItem key={teacher.id} teacher={teacher} />
                    ))
                ) : (
                    <p className="no-proffys">Nenhum proffy disponível</p>
                )}
            </main>
        </div>
    )
}


export default TeacherList
