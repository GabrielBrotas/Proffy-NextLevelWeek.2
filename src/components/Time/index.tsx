import React from 'react'
import { format } from 'util';

import './styles.css'

interface TimeProps {
    week_day: number;
    from: number;
    to: number;
}

const Time: React.FC<TimeProps> = ({week_day, from, to}) => {

    function convertMinutesToHours(time: number) {
        let hour, minutes; 

        hour = time / 60 | 0
        minutes = time % 60 | 0

        if(minutes.toString().length == 1) {
            minutes = "0" + minutes;
        }

        return `${hour}:${minutes}`;
    }


    function formatResult(fromTime: number, toTime: number) {
        let result;

        result = `${convertMinutesToHours(fromTime)} - ${convertMinutesToHours(toTime)}`;
        
        if(result === "0:00 - 0:00") {
            result = '-'
        }

        return result;
    }

    return (
        <div className={ from + to === 0 ? "class-schedule-component desactived-content" : "class-schedule-component activated-content"}>
            <div className="class-schedule-info">
                <label className={ from + to === 0 ? "desactived-label" : "activated"}>Dia</label>
                <span className={ from + to === 0 ? "desactived-span" : "activated"}>
                    {week_day === 0 && "Domingo"}
                    {week_day === 1 && "Segunda"}
                    {week_day === 2 && "Terça"}
                    {week_day === 3 && "Quarta"}
                    {week_day === 4 && "Quinta"}
                    {week_day === 5 && "Sexta"}
                    {week_day === 6 && "Sábado"}
                </span>
            </div>
            <div className="class-schedule-info">
                <label className={ from + to === 0 ? "desactived-label" : "activated"}>Horário</label>
                <span className={ from + to === 0 ? "desactived-span" : "activated"}>{formatResult(from, to)}</span>
            </div>
        </div>
    )
}


export default Time