import styled from '@emotion/styled';

interface MenuItemProps {
    selected?: boolean 
}


export const MenuItemContainer = styled.div<MenuItemProps>`
cursor: pointer;
display: flex;
flex-direction: row;
padding: 0 30px;
width:100%;
height:45px;
border-left: ${props=> props.selected? '3px solid #2E71F3': 'none'};
background-color: ${props=> props.selected? '#EDF0F5': '#ffffff'};
align-items: center;
color: ${props=> props.selected? 'rgb(0,0,0)': 'rgba(0,0,0,0.5)'};

>img {
    margin-right: 10px;
    width:16px; 
}
>span {
    font-size: 13px;
    font-weight: 400;
}
`