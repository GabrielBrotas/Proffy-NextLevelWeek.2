import React from 'react'
import api from '../../services/api'

import Time from '../Time'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import defaultUserImage from '../../assets/images/default-image.png'

import './styles.css'

interface TeacherItemProps {
    teacher: Teacher;
}

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    cost: number;
    bio: string;
    subject: string;
    schedule: Array<ScheduleProps>
}

export interface ScheduleProps {
    week_day: number;
    from: number;
    to: number;
}


const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection() {
        api.post('/connections', {user_id: teacher.id})
    }
    return (
        <article className="teacher-item">
                    <header>
                        <img src={defaultUserImage} alt={teacher.name} />

                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>  
                        </div>
                    </header>

                    <p>
                        {teacher.bio}
                    </p>

                    <div className="class-schedule-time-content">
                        <Time schedule={teacher.schedule} />
                    </div>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>

                        <a 
                            href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}`} 
                            rel="noreferrer"
                            onClick={createNewConnection}
                            target="_blank"
                        >
                            <img src={whatsappIcon} alt="Contato Wpp" />
                            Entrar em Contato
                        </a>
                    </footer>
                </article>
    )
}


export default TeacherItem