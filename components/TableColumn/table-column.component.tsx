import React from 'react';

import {ColumnHeader, TableColumnContainer, TableCell, DateText, DayOfTheWeekText, Overlay, Lesson, OverlaysContainer, Divider} from './table-column.styles';
import moment from 'moment';
import {dates, ITeacher} from '../../dummy-data';
import {teachers} from '../TableHeader/table-header.component';

interface TableColumnProps {
    date: string
}

const daysOfTheWeek: {[day:number]:string} = {
    0: 'Воскресенье',
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
}

const TableColumn: React.FC<TableColumnProps> = ({date}) => {
    const lessonsData = dates.filter((d)=> d.date===date)
    
    const TeacherOverlay:React.FC<{teacher:ITeacher}> = ({teacher}) => {
        const currentTeacher = teachers.filter(t => {
            return t.name===teacher.name
        })
        const currentColor = currentTeacher[0].color
        const start = Math.floor(teacher.time.start/100)*60 + teacher.time.start%100 
        const end = Math.floor(teacher.time.end/100)*60 + teacher.time.end%100 
        return (
            <Overlay 
            top={(start-480)/15*23.5} 
            height={(end-start)/15*23.5} 
            color={currentColor}>
                <Divider color={currentColor}/>
                {
                    teacher.lessons.map((lesson, i)=> {
                        const startLesson = Math.floor(lesson.start/100)*60 + lesson.start%100 
                        return (
                            <Lesson key={i} top={(startLesson-start)/15*23.5} color={currentColor}>
                                <img  src='/table/user.svg'/>
                                <span>{lesson.pupil}</span>
                            </Lesson>
                        )
                    })
                }
            </Overlay>
        )
    }

    return (
        <TableColumnContainer today={moment(date).isSame(moment('2020-07-30'), 'day')}>
            <ColumnHeader>
                <DateText>{moment(date).format('DD.MM')},</DateText>
                <DayOfTheWeekText>{daysOfTheWeek[moment(date).weekday()]}</DayOfTheWeekText>
            </ColumnHeader>
            {
                Array.from(Array(33).keys()).map((n)=> {
                    return(
                        <TableCell key={n} />
                    )
                })
            }
            {
                lessonsData[0]?
                <OverlaysContainer>
                    {
                        lessonsData[0].teachers.map((teacher, i)=> {
                            return <TeacherOverlay key={i} teacher={teacher}/>
                        })
                    }
                </OverlaysContainer>
                :null
            }
        </TableColumnContainer>
    )
}


export default TableColumn;