import React from 'react'
import {useHistory} from 'react-router-dom'

import './styles.css'

import checkIcon from '../../assets/images/icons/success-check-icon.svg'
import Button from '../Button'

interface ConfirmContentProps {
    title: string;
    subTitle: string;
}

const ConfirmContent: React.FC<ConfirmContentProps> = ({title, subTitle}) => {

    const history = useHistory()

    function pushToLoginPage() {
        history.push('/login')
    }

    return (
        <div className="content">
            <img src={checkIcon} alt="checked" />

            <h2>{title}</h2>
            <p>{subTitle}</p>

            <Button text="Login" onClick={pushToLoginPage}/>
        </div>
    )
}

export default ConfirmContent
