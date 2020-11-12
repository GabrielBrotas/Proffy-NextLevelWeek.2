import React from 'react'
import Input from '../../components/Input'

// Components
import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels">

                {/* Child do componente PageHeader */}
                <form id="search-teachers">

                    <Input 
                    label="Materia" 
                    name="subject" 
                    />
                    
                    <Input 
                    label="Dia da Semana" 
                    name="week_day" 
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
