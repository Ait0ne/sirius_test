import styled from '@emotion/styled';

interface CurrentTimeProps {
    top: number
}

export const CurrentTimeLine = styled.div<CurrentTimeProps>`
    position: absolute;
    width:100%;
    padding-left:10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    left:0;
    top: ${props => props.top+56}px;
    z-index:1;
`

export const Line = styled.div`
width:100%;
background-color: #ED0F48;
height:2px;
`

export const Circle = styled.div`
width: 8px;
height:8px;
border-radius: 50%;
background-color: #ED0F48;
`