import React from 'react';

import {ToolsPanelContainer} from './tools-panel.styles';
import TableCategories from '../TableCategories/table-categories.component';
import ControlButtons from '../ControlButtons/control-buttons.component';


const ToolsPanel: React.FC = () => {
    return (
        <ToolsPanelContainer>
            <TableCategories/>
            <ControlButtons/>
        </ToolsPanelContainer>
    )
}

export default ToolsPanel;
