import React from 'react';

import {ProfileContainer, Avatar} from './profile.styles';


interface ProfileProps {
    name: string;
    imgSrc: string;
}


const Profile: React.FC<ProfileProps> = ({name, imgSrc}) => {
    return (
        <ProfileContainer>
            <span>{name}</span>
            <Avatar src={imgSrc} alt='profile'/>
        </ProfileContainer>
    )
}

export default Profile;