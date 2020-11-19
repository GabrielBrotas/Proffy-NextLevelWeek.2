import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    // Tem que passar o formato que o array options vai aceitar, poderia ser numerico, Array<number>, de textos, Array<string>, neste caso vai ser um objeto com os seguintes parametros
    options: Array<{
        value: string;
        label: string;
    }>;
}

const Select: React.FC<SelectProps> = ({label, name, options, ...rest }) => {

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest} >
                <option value="" disabled defaultValue="" hidden>Selecione</option>
                {options.map( (option, key) => {
                    return <option key={key} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    )
    
}

export default Select