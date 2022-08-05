import React, { useState, useContext, createContext } from 'react'
import { Title, Frame, Item, Header, Body, Container, Inner } from './styles/style'

const ToggleContext = createContext();

export default function Accordion({ children, ...restprops }) {
    return (
        <Container {...restprops}>
            <Inner>{children}</Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restprops }) {
    return (
        <Title {...restprops}>{children}</Title>
    )
}
Accordion.Frame = function AccordionFrame({ children, ...restprops }) {
    return (
        <Frame {...restprops}>{children}</Frame>
    )
}
Accordion.Item = function AccordionItem({ children, ...restprops }) {
    const [ToggleShow, setToggleShow] = useState(false)
    return (
        <ToggleContext.Provider value={{ ToggleShow, setToggleShow }}>
            <Item {...restprops}>{children}</Item>
        </ToggleContext.Provider>
    )
}
Accordion.Header = function AccordionHeader({ children, ...restprops }) {
    const {ToggleShow, setToggleShow} = useContext(ToggleContext)
    return (
        <Header onClick={() => {setToggleShow(prev => !prev)}} {...restprops}>
            {children}
            {ToggleShow
                ? (<img src='/images/icons/close.png' alt='Close'/>) 
                : (<img src='/images/icons/add.png' alt='Open'/>)}
        </Header>
    )
}
Accordion.Body = function AccordionBody({ children, ...restprops }) {
    const { ToggleShow } = useContext(ToggleContext)
    return (
        ToggleShow ? <Body {...restprops}>{children}</Body> : null
    )
}


