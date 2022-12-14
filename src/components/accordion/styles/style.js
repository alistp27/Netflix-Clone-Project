import styled from "styled-components/macro";

export const Container = styled.div`
display : flex;
border-bottom : 8px solid #222;
`;
export const Inner = styled.div`
display : flex;
flex-direction : column;
max-width : 800px;
margin : auto;
padding : 70px 45px;
`;
export const Item = styled.div`
margin-bottom : 10px;
color : white ;
max-width: 648px;
margin : auto;
width : 100%;
&:first-of-type{
    margin-top : 3rem;
}
`;
export const Header = styled.div`
display : flex;
justify-content: space-between;
max-width: 648px;
cursor : pointer;
margin-bottom : 3px;
font-size : 26px;
background : #303030;
padding: 1.8rem 1.2rem;
align-items: center;

img{
    filter : brightness(0) invert(1);
    width : 24px;

    @media(max-width : 600px) {
        width : 16px;
    }
}

@media(max-width : 600px) {
    font-size : 16px;
}    
`;
export const Body = styled.div`
max-height : 1200px;
transition : max-height 0.5s ease-in-out;
margin-bottom : 3px;
font-size : 26px;
background : #303030;
padding : 0.8rem 1.2rem;
align-items: center;
white-space: pre-wrap;

@media (max-width:600px) {
    font-size : 16px;
    line-height :22px
}
`;
export const Title = styled.h1`
font-size : 50px;
line-height : 1.1;
margin-top : 0;
margin-bottom : 8px;
color : white;
text-align : center;

@media (max-width :600px) {
    font-size : 35px;
}
`;
