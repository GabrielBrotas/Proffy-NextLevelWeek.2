import React from 'react'

// Components
import PageHeader from '../components/PageHeader'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponívels">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>
                </form>
            </PageHeader>
        </div>
    )
}


export default TeacherList
