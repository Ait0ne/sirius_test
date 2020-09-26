import styled from '@emotion/styled';

export const TableHeaderContainer = styled.div`
height:82px;
width:100%;
display: flex;
flex-direction: column;
justify-content: space-between;
padding-bottom:20px;
align-items: center;
`


export const DateRange = styled.span`
font-size:18px;
line-height: 26px;
text-align: center;
`

export const Legend = styled.div`
display: flex;
flex-direction: row;
>span {
    display: flex;
    align-items: center;
    margin-right: 15px;
    font-size: 11px;
    line-height:16px;
}
`
interface CircleProps {
    color: string
}

export const Circle = styled.div<CircleProps>`
width:11px;
height:11px;
border-radius: 50%;
background-color: ${props => props.color};
margin-right:5px;

`