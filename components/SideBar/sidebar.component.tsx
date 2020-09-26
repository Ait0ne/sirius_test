import React from 'react';
import MenuItem from '../MenuItem/menu-item.component';


import {SideBarContainer, SideBarHeader, Logo, HideSidebar, MenuContainer} from './sidebar.styles';

const Sidebar:React.FC = () => {

    return (
        <SideBarContainer>
            <SideBarHeader>
                <Logo src='/Sidebar/logo.svg'/>
                <HideSidebar src='/Sidebar/hide.svg' />
            </SideBarHeader>
            <hr ></hr>
            <MenuContainer>
                <MenuItem text='Занятия' iconSrc='/Sidebar/calendar-select-day.svg' />
                <MenuItem text='Учащиеся' iconSrc='/Sidebar/user.svg' />
                <MenuItem text='Тренеры' iconSrc='/Sidebar/book.svg' selected={true}/>
                <MenuItem text='Финансы' iconSrc='/Sidebar/ruble.svg' />
                <MenuItem text='Абонементы' iconSrc='/Sidebar/ticket.svg' />
                <MenuItem text='Доступ в CRM' iconSrc='/Sidebar/flag.svg' />
                <MenuItem text='Рассылки' iconSrc='/Sidebar/email.svg' />
                <MenuItem text='Отчеты' iconSrc='/Sidebar/chart-bar.svg' />
                <MenuItem text='Настройки' iconSrc='/Sidebar/settings.svg' />
            </MenuContainer>
        </SideBarContainer>
    )
} 

export default Sidebar;