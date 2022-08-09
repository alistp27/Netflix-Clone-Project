import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const BackGround = styled.div`
display : flex;
flex-direction : column;
background : url(${({src}) => (src?`/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`)}) top left / cover no-repeat;
`
export const Container = styled.div`
display : flex;
margin :0 56px;
height : 64px;
padding :18px 0;
justify-content: space-between;
align-items: center;
`
export const Logo = styled.img`
height : 32px;
width : 108px;
margin-right :40px ; 
@media (min-width :1449px) {
    height : 45px;
    width : 167px; 
}
`
export const ButtonLinks = styled(Link)`
display : flex ; 
background-color : #e50914;
width : 80px;
height : fit-content;
color : white ;
border : 0; 
border-radius : 5px;
font-size : 16px;
align-items: center;
justify-content: center;
padding : 6px 16px;
cursor : pointer ;
text-decoration : none;

&:hover {
    background-color : #f40600;
}
`