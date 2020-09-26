import React from 'react';

import {HeaderContainer, ProfileAndNotificationContainer, Divider} from './header.styles';
import SearchField from '../SearchField/search-field.component';
import Profile from '../Profile/profile.component';
import Notification from '../Notification/notification.component';

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <SearchField/>
            <ProfileAndNotificationContainer>
                <Notification notify={true}/>
                <Divider/>
                <Profile imgSrc='/Profile/avatar.png' name='Alexander Gerasimuk'/>
            </ProfileAndNotificationContainer>
        </HeaderContainer>
    )
}

export default Header;