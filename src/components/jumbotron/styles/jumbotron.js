import styled from "styled-components/macro";
export const Inner = styled.div`
display:flex;
align-items:center;
flex-direction : ${({ direction }) => direction};
justify-content: space-between;
max-width :1100px;
margin :auto;
padding : 30px
width:100%;
@media (max-width:1000px){
    flex-direction:column;
    h2:last-of-type {
        margin-bottom : 50px;
    }
}
`;

export const Item = styled.div`
border-bottom : 8px solid #222;
`

export const Container = styled.div``
export const Pane = styled.div`
width : 50%

@media (max-width : 1000px ) {
    width : 100%;
    margin : 0 45px;
    text-align : center ;
}
`
export const Title = styled.h1`
font-size : 50px;
margin-bottom : 8px;
line-height : 1.1;

@media (max-width : 600px){
    font-size : 35px;
}
`
export const SubTitle = styled.h2`
font-size:26px;
font-weight:normal;
line-height:normal;
@media (max-width: 600px){

    font-size : 18px;
}
`
export const Image = styled.img`
height:auto;
max-width:100%;
`
