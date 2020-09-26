import React from 'react';
import {TableHeaderContainer, DateRange, Circle, Legend} from './table-header.styles';
import moment from 'moment';

interface TableHeaderProps {
    date: string
}

type Teacher = {
    name: string,
    color: string
}

export const teachers:Teacher[]  = [
    {
        name: 'Высоцкая Элеонора',
        color: '#DF1B7D'
    },
    {
        name: 'Гайсина Гузель',
        color: '#52AD5B'
    },
    {
        name: 'Гиголо Анна',
        color: '#FE8900'
    },
    {
        name: 'Горбукова Юлия',
        color: '#00459B'
    },
    {
        name: 'Марков Руслан',
        color: '#2E71F3'
    },

]


const TableHeader: React.FC<TableHeaderProps> = ({date}) => {
    
    const TeacherInfo:React.FC<{teacher:Teacher}> = ({teacher}) => {
        const {name, color} = teacher
        return (
            <span><Circle color={color}></Circle>{name}</span>
        )
    }


    return(
        <TableHeaderContainer>
            <DateRange>{moment(date).locale('ru').format('DD MMMM')} - {moment(date).add(6,'days').locale('ru').format('DD MMMM')}</DateRange>
            <Legend>
                {
                    teachers.map((teacher, index) => {
                        return(
                            <TeacherInfo key={index} teacher={teacher}/>
                        )
                    })
                }
            </Legend>
        </TableHeaderContainer>
    )
}


export default TableHeader;