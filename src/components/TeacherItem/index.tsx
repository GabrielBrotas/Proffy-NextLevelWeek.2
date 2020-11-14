import React from 'react'

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

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>

                        <a 
                            href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}`} 
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