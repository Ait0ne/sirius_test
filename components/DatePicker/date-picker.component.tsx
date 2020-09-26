import React from 'react';

import {DatePickerContainer} from './date-picker.styles';

interface DatePickerProps {
    date: string
}

const DatePicker: React.FC<DatePickerProps> = ({date}) => {
    return (
        <DatePickerContainer>
            <img src='/DatePicker/left_arrow.svg' alt='left-arrow'/>
            <span>{date}</span>
            <img src='/DatePicker/right_arrow.svg' alt='right-arrow'/>
        </DatePickerContainer>
    )
}

export default DatePicker;