import React, {useState} from 'react';

import {SearchFieldContainer, SearchFieldInput, SearchFieldIcon, PlaceholderText} from './search-field.styles';



const SearchField: React.FC = () => {
    const [text, setText] = useState('')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }
    
    return (
        <SearchFieldContainer>
            <SearchFieldInput
            type='text'
            name='text'
            value={text}
            onChange={handleChange}
            />
            {
                text.length===0?
                <PlaceholderText>Поиск Клиента</PlaceholderText>
                :null
            }
            <SearchFieldIcon src='/SearchField/search.svg'/>
        </SearchFieldContainer>
    )
}

export default SearchField;