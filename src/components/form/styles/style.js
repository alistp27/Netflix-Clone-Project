import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    min-height : 660px;
    background-color : rgba(0,0,0,0.75);
    border-radius : 8px;
    box-sizing :border-box;
    width : 100%;
    margin : auto;
    max-width : 450px;
    padding : 60px 70px;
    margin-bottom : 100px;
`;
export const Error = styled.div`
    background-color : #e87c03;
    font-size:14px;
    border-radius : 5px;
    margin : 0 0 15px 0 ;
    color : white;
    padding : 15px;
`;
export const Title = styled.h1`
    color : white;
    font-size : 32px;
    font-weight : bold;
    margin-bottom : 30px;
`;
export const Text = styled.p`
    color : #737373;
    font-size : 16px;
    font-weight : 500;
`;
export const SmallText = styled.p`
    color : #8c8c8c;
    font-size : 12px;
    font-weight : normal;
    margin-top : 10px
`;
export const Input = styled.input`
    background-color : #333;
    border-radius : 5px;
    border : 0;
    color : white;
    height : 50px;
    line-height : 50px;
    padding : 5px 20px;
    margin-bottom : 20px;

&:last-of-type{
    margin-bottom : 30px;
}
`;
export const Base = styled.form`
    display:flex;
    flex-direction:column;
    max-width : 500px;
    width : 100%;
`;
export const Submit = styled.button`
    background-color:#e50914;
    border-radius : 5px;
    font-size:16px;
    font-weight : bold;
    padding:16px;
    margin : 12px 0 12px 0;
    cursor :pointer;
    color : white;
&:disabled{
    opacity:0.5
}
`;
export const Link = styled(ReactRouterLink)`
color : white;
font-size :16px;
font-weight : bold;
`;
