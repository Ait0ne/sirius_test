import React, {Fragment} from 'react';


import {Circle,CurrentTimeLine,Line} from './current-time.styles';

const tableHeight = 775.5
const workDay = 510

const CurrentTime: React.FC = () => {
    const time = '2020-07-31 11:13'

    console.log(new Date(time).getHours(), new Date(time).getMinutes())
    
    return (
        <Fragment>
            <CurrentTimeLine top={(new Date(time).getHours()*60+new Date(time).getMinutes()-480)/workDay*tableHeight}>
                <Circle></Circle>
                <Line></Line>
            </CurrentTimeLine>
        </Fragment>
    )
}

export default CurrentTime;