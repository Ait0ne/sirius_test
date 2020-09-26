import React from 'react';

import {NotificationContainer, NotificationCircle, NotificationIcon} from './notification.styles';

interface NotificationProps {
    notify?: boolean
}

const Notification:React.FC<NotificationProps> = ({notify}) => {
    return (
        <NotificationContainer>
            <NotificationIcon src='/Notification/notification.svg'/>
            {
                notify? 
                <NotificationCircle src='/Notification/new.svg'/>
                : null
            }
        </NotificationContainer>
    )
}


export default Notification;