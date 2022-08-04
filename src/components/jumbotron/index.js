import React from 'react';
import { Container, Pane, Title, SubTitle, Image, Inner } from './styles/jumpbotron'
const Jumbotron = ({ children, direction , ...restprops }) => {
    return (
        <Inner dire ction={direction}>
            {children}
        </Inner>
    );
}
export default Jumbotron;
Jumbotron.Container = function jumpbotronContainer({ children, ...restprops }) {
    return <Container {...restprops}>{children}</Container>
}
Jumbotron.Pane = function jumpbotronPane({ children, ...restprops }) {
    return <Pane {...restprops}>{children}</Pane>
}
Jumbotron.Title = function jumpbotronTitle({ children, ...restprops }) {
    return <Title {...restprops}>{children}</Title>
}
Jumbotron.SubTitle = function jumpbotronSubTitle({ children, ...restprops }) {
    return <SubTitle {...restprops}>{children}</SubTitle>
}
Jumbotron.Image = function jumpbotronImage({ ...restprops }) {
    return <Image {...restprops} />
}
