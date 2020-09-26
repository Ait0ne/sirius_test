import React from 'react';

import {IconButton, PickerContainer} from './picker.styles';


const Picker: React.FC = () => {
    return(
        <PickerContainer>
            <IconButton><img  src='/Buttons/list.svg'/></IconButton>
            <IconButton><img  src='/Buttons/schedule.svg'/></IconButton>
            <IconButton active><img  src='/Buttons/book.svg'/></IconButton>
        </PickerContainer>

    )
}

export default Picker;