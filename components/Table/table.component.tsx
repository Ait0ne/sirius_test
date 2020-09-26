import React from 'react';

import {TableContainer, TableBody} from './table.styles';
import TableColumn from '../TableColumn/table-column.component';
import TableHeader from '../TableHeader/table-header.component';
import TimeColumn from '../TimeColumn/time-column.component';
import CurrentTime from '../CurrentTime/current-time.component';
import DatePicker from '../DatePicker/date-picker.component';

const Table: React.FC = () => {
    return (
        <TableContainer>
            <TableHeader date='2020-07-27'/>
            <DatePicker date='Сегодня'/>
            <TableBody>
                <CurrentTime />
                <TimeColumn/>
                <TableColumn date='2020-07-27'/>
                <TableColumn date='2020-07-28'/>
                <TableColumn date='2020-07-29'/>
                <TableColumn date='2020-07-30'/>
                <TableColumn date='2020-07-31'/>
                <TableColumn date='2020-08-01'/>
                <TableColumn date='2020-08-02'/>
            </TableBody>
        </TableContainer>
    )
}

export default Table;