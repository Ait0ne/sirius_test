import styled from '@emotion/styled';

export const SideBarContainer = styled.div`
flex: 0 0 210px;
height:100%;
background-color: #ffffff;
>hr {
    border-color:rgba(0, 0, 0, 0.1);
    margin:0;
}
`

export const SideBarHeader = styled.div`
height: 129px;
padding: 30px 45px;
position: relative;
`

export const Logo = styled.img`
width: 100%;
height: 100%;
`
export const HideSidebar = styled.img`
position: absolute;
top: 30px;
right: 20px;
width:14px;
height:14px;
cursor: pointer;
`

export const MenuContainer = styled.div`
margin-top:40px;
`