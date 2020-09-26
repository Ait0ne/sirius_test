import React from 'react';

import {Button, ControlButtonsContainer} from './control-buttons.styles';
import Picker from '../Picker/picker.component';

const ControlButtons: React.FC = () => {
    return (
        <ControlButtonsContainer>
            <Button variant='primary'><img src='/Buttons/add.svg'/>Добавить</Button>
            <Button variant='default'><img src='/Buttons/filter.svg'/>Фильтр</Button>
            <Picker />
        </ControlButtonsContainer>
    )
}


export default ControlButtons;