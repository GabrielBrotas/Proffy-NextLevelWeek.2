import React from 'react'

import Time from '../Time'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import api from '../../services/api'

import './styles.css'

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    cost: number;
    bio: string;
    subject: string;
    classSchedule: Array<Schedule>
}

interface Schedule {
    week_day: number;
    from: number;
    to: number;
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {

    function createNewConnection() {
        api.post('/connections', {user_id: teacher.id})
    }

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} alt={teacher.name} />

                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>  
                        </div>
                    </header>

                    <p>
                        {teacher.bio}
                    </p>

                    <div className="class-schedule-time-content">
                        {teacher.classSchedule.map( (schedule, index) => {
                            return (
                                <Time key={index} week_day={schedule.week_day} from={schedule.from} to={schedule.to} />
                            )
                        })}
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