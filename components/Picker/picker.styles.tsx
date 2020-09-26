import styled from '@emotion/styled';

export const PickerContainer = styled.div`
background: #FFFFFF;
border-radius: 33px;
display: flex;
margin-left: 10px;

`

interface IconButtonProps {
    active?: boolean
}

export const IconButton = styled.button<IconButtonProps>`
cursor: pointer;
border: none;
width:42px;
height:43px;
border-radius: 33px;
display: flex;
justify-content: center;
align-items: center;
color: ${props=> props.active? '#ffffff' : 'rgba(0, 0, 0, 0.5)'};
background-color: ${props => props.active? '#2E71F3': '#ffffff'};
box-shadow: ${props => props.active? '0px 0px 20px rgba(33, 45, 65, 0.1)': 'none'};
transform: ${props => props.active? 'matrix(-1, 0, 0, 1, 0, 0)': 'none'};
`

