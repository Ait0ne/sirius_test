import styled from '@emotion/styled';

export const ControlButtonsContainer = styled.div`
display: flex;
flex-direction: 'row';
justify-content: flex-end;
align-items: center;
`

interface ButtonProps {
    variant: 'primary' | 'default'
}

export const Button = styled.button<ButtonProps>`
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
height:43px;
padding: 14px 25px 14px 20px;
>img {
    margin-right: 5px;
    width: 16px; 
    height: 16px;
}
background-color: ${props => props.variant==='primary' ? '#52AD5B' : '#ffffff'};
color: ${props => props.variant==='primary' ? '#ffffff' : '#000000'};
margin-left: 10px;
font-weight: 500;
font-size: 13px;
border: none;
`