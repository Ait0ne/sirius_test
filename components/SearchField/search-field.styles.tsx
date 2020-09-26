import styled from '@emotion/styled';

export const SearchFieldContainer = styled.div`
position: relative;
`

export const SearchFieldInput = styled.input`
width:500px;
height:43px;
border-radius: 67px;
background-color: #ffffff;
border: none;
padding: 13px 0 13px 36px;
`

export const SearchFieldIcon = styled.img`
position: absolute;
width:16px;
height: 16px;
top: calc(50% - 8px);
left: 15px;
`

export const PlaceholderText = styled.span`
position: absolute;
left: 36px;
font-size: 12px;
line-height: 17px;
color: rgba(0, 0, 0, 0.5);
top: 14px;
`
