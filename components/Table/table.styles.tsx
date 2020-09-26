import styled from '@emotion/styled';

export const TableContainer = styled.div`
width:100%;
background-color: #ffffff;
padding:20px;
max-height: calc(100% - 166px);
overflow-y: scroll;
-ms-overflow-style: none;
scrollbar-width: none; 
position: relative;
&::-webkit-scrollbar {
    display: none;
}
`

export const TableBody = styled.div`
display: flex;
flex-direction: row;
position: relative;
`
