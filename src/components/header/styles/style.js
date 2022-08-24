import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const BackGround = styled.div`
display : flex;
flex-direction : column;
background : url(${({src}) => (src?`/images/misc/${src}.jpg` : `/images/misc/home-bg.jpg`)}) top left / cover no-repeat;

@media (max-width : 1100px) {
    ${({dontShowBackgroundSmallScreens}) => { return (
        dontShowBackgroundSmallScreens && `background : none;`
    )}}
}

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
export const Feature = styled(Container)`
padding : 150px 0 500px 0;
flex-direction :column;
align-items:normal;
width :50%;
@media (max-width :1100px ){
    display:none;
}
`
export const Text = styled.h2`
color : white;
font-size :50px;
line-height :normal;
font-weight : bold;
text-shadow : 2px 2px 4px rgba(0,0,0,0.45);
margin:0;
padding-bottom : 20px;
background-color:rgba(0,0,0,0.45);
border-radius :5px 5px 0 0;
`
export const TextSmall = styled.p`
color : white;
font-size :22px;
line-height :normal;
text-shadow : 2px 2px 4px rgba(0,0,0,0.45);
background-color:rgba(0,0,0,0.45);
border-radius :0 0 5px 5px;
margin:0;
`
export const TextLink = styled.p`
color :white;
line-height:normal;
font-size:18px;
text-decoration:none;
padding:10px;
cursor :pointer;

&:hover{
    font-weight:bold;
}
`
export const Group = styled.div`
display : flex;
align-items : center;
`

export const Picture = styled.button`
background : url(${({src}) => src});
background-size : contain;
border :0;
width :32px;
height :32px;
cursor :pointer;

`
export const DropDown = styled.div`
display:none;
background-color:black;
position :absolute;
padding:10px;
width:100px;
top:32px;
right:0px;

${Group}:last-of-type ${TextLink}{
    cursor:pointer;
}

${Group}{
    margin-bottom:10px;

    &:last-of-type{
        margin-bottom :0;
    }
    ${TextLink},${Picture} {
        cursor :default;
    }
p{
    font-size:12px;
    margin-bottom:0;
    margin-top:0;
}

}

`

export const Profile = styled.div`
display:flex;
align-items : center;
margin-left:20px;
position : relative;

button{
    cursor : pointer;
}

&:hover > ${DropDown}{
    display:flex;
    flex-direction : column;

}
`