import styled from '@emotion/styled';

interface ColumnProps {
    today?: boolean
}

export const TableColumnContainer = styled.div<ColumnProps>`
flex: 1 1 100%;
height: 831.5px;
min-width:154px;
background-color: ${props=> props.today? '#F4F6F9' :'#ffffff'};
position: relative;

`
export const TableCell = styled.div`
width:100%;
height: 23.5px;
border-top: 1px solid rgba(0, 0, 0, 0.1);
border-left: 1px solid rgba(0, 0, 0, 0.1);
`

export const ColumnHeader = styled.div`
border-top: 1px solid rgba(0, 0, 0, 0.1);
height:56px;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size:12px;
text-align: center;
`

export const DateText = styled.span`
color: black;
font-weight: 500;
`

export const DayOfTheWeekText = styled.span`
color: rgba(0,0,0,0.5);
`

interface OverlayProps {
    top: number,
    color: string,
    height: number
}

export const Overlay = styled.div<OverlayProps>`
position: relative;
top: ${props => props.top}px;
width:100%;
height: ${props => props.height}px;
margin-right: 2px;
&:after {
    content: '';
    width:100%;
    height:100%;
    position: absolute;
    top: 0;
    left:0;
    background-color: ${props=> props.color};
    opacity: 0.1;
}

`

interface LessonProps {
    top: number,
    color: string
}

export const Lesson = styled.div<LessonProps>`
position: absolute;
display: flex;
flex-direction:column;
align-items: flex-start;
top: ${props => props.top}px;
width: 100%;
height:69px;
border: ${props => `2px solid ${props.color}`};
border-radius: 0px 3px 3px 0px;
background-color: #ffffff;
z-index:1;
font-size: 11px;
line-height: 100%;
padding: 7px 9px;
overflow: hidden;
>span {
    word-break: break-all;
    margin-top: 3px;
}
`

export const OverlaysContainer = styled.div`
display: flex;
flex-direction: row;
position: absolute;
top:56px;
left:0;
width:99%;
`
interface DividerProps {
    color: string;
}

export const Divider = styled.div<DividerProps>`
    background-color: ${props => props.color};
    width:4px;
    border-radius: 6px;
    height:100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
`