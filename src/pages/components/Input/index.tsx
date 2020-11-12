// InputHtmlAttributes tem todas os atributos que uma tag input html teria, exemplo: autofocus, onblur, etc..
import React, { InputHTMLAttributes } from 'react';

import './styles.css'

// extends para o nosso component Input recerber todos os atributos que uma tag html tem, passando como parametro o HTMLInputElement
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

// ...rest vai pegar todas os atributos que o InputProps vai ter, só ignorando o label e o name que foi extraido
const Input: React.FC<InputProps> = ({label, name, ...rest }) => {

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            {/* ...rest para passar os atributos para o input, assim o usuario vai poder ter acesso deles no componente */}
            <input type="text" id={name} {...rest} />
        </div>
    )

    
}

export default Input