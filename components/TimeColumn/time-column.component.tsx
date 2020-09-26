import React from 'react';

import {Time, TimeColumnContainer, TimeColumnHeader} from './time-column.styles';
import moment from 'moment';

const TimeColumn: React.FC = () => {
    return (
        <TimeColumnContainer>
            <TimeColumnHeader>
                <img src='/Table/alarm.svg'/>    
            </TimeColumnHeader>
            {
                Array.from(Array(17).keys()).map(i => {
                    return (
                        <Time key={i}>{moment('2020-01-01 08:00').add(i*30, 'minutes').format('HH:mm')}</Time>
                    )
                })
            }
        </TimeColumnContainer>
    )
}

export default TimeColumn;