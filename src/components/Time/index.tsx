import React from 'react'
import { ScheduleProps } from '../TeacherItem';

import './styles.css'

interface TimeProps {
    schedule: Array<ScheduleProps>;
}

const Time: React.FC<TimeProps> = ({schedule}) => {

    const weekDays: any = [0, 1, 2, 3, 4, 5, 6]

    function convertMinutesToHours(time: number) {
        let hour, minutes; 

        hour = time / 60 | 0
        minutes = time % 60 | 0

        if(minutes.toString().length === 1) {
            minutes = "0" + minutes;
        }

        return `${hour}:${minutes}`;
    }

    function formatResult(fromTime: number, toTime: number) {
        let result;
        result = `${convertMinutesToHours(fromTime)} - ${convertMinutesToHours(toTime)}`;
        return result;
    }

    return (
        weekDays.map( (day: number) => {
        
            let scheduleDayEqualToDay: Boolean = false;
            let from: number = 0, to: number = 0;

            schedule.forEach( scheduleClass => {
                if(scheduleClass.week_day === day) { 
                    scheduleDayEqualToDay = true;
                    from = scheduleClass.from;
                    to = scheduleClass.to
                }
            }) 

            return (
            <div key={day} className={ !scheduleDayEqualToDay ? "class-schedule-component desactived-content" : "class-schedule-component activated-content"}>
                <div className="class-schedule-info">
                    <label className={ !scheduleDayEqualToDay ? "desactived-label" : "activated"}>Dia</label>
                    <span className={ !scheduleDayEqualToDay ? "desactived-span" : "activated"}>
                        {day === 0 && "Domingo"}
                        {day === 1 && "Segunda"}
                        {day === 2 && "Terça"}
                        {day === 3 && "Quarta"}
                        {day === 4 && "Quinta"}
                        {day === 5 && "Sexta"}
                        {day === 6 && "Sábado"}
                    </span>
                </div>
                <div className="class-schedule-info">
                    <label className={ !scheduleDayEqualToDay ? "desactived-label" : "activated"}>Horário</label>
                    <span className={ !scheduleDayEqualToDay ? "desactived-span" : "activated"}>
                        { !scheduleDayEqualToDay ? (
                            '-'    
                        ) : (
                            formatResult(from, to)
                        )}
                    </span>
                </div>
            </div>
        )})
    )
}

export default Time