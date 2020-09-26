import React from 'react';

import {ScheduleContainer} from './schedule.styles';
import Header from '../Header/header.component';
import ToolsPanel from '../ToolsPanel/tools-panel.component';
import Table from '../Table/table.component';


const Schedule: React.FC = () => {
    return (
        <ScheduleContainer>
            <Header/>
            <ToolsPanel />
            <Table/>
        </ScheduleContainer>
    )
} 


export default Schedule;