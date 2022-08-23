import styled from 'styled-components/macro'

export const Container = styled.div`
display:flex;
flex-direction : column;
justify-content:center;
align-item:center;
margin : auto;
max-width : 85%;
`
export const Title = styled.h1`
color : white;
width :100%;
font-size : 48px;
font-weight : 500;
text-align : center;
`
export const List = styled.ul`
margin : 0;
padding : 0;
display : flex;
flex-direction : row;
`
export const Item = styled.li`
max-height :200px;
max-width :200px;
list-style-type : none;
text-align : center;
margin-right : 30px;

&:hover >${Picture}{
    border : 5px solid white;
}

&:hover ${Name}{
    font-weight : bold;
    color:white;
}

`
export const Picture = styled.img`
width : 100%;
max-width:150px;
height : auto;
border : 5px solid black;
cursor : pointer;
`
export const Name = styled.p`
color : #808080;
text-overflow : ellipsis;
font-size :16px;

&:hover{
    font-weight : bold;
    color : #e5e5e5;
}
`