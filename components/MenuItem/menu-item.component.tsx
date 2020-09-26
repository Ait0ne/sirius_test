import React from 'react';
import {MenuItemContainer} from './menu-item.styles';

export interface MenuItemProps {
    iconSrc?: string;
    text: string;
    selected?: boolean
}


const MenuItem: React.FC<MenuItemProps> = ({iconSrc, text, selected}) => {
    return (
        <MenuItemContainer selected={selected}>
            {
                iconSrc ?
                <img  src={iconSrc}/>
                :
                null
            }
            <span>{text}</span>
        </MenuItemContainer>
    )
}

export default MenuItem;