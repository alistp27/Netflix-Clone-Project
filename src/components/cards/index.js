import React, { useContext, createContext, useState } from 'react'
import { Container, Group, Title, SubTitle, Text } from './styles/style'
export const FeatureContext = createContext()
export function Card({ children, ...restprops }) {
    const [ShowFeature, setShowFeature] = useState(false)
    const [ItemFeature, setItemFeature] = useState({})
    return (
        <FeatureContext.Provider value={{ ShowFeature, setShowFeature, ItemFeature, setItemFeature }}>
            <Container {...restprops}>{children}</Container>
        </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restprops }) {
    <Group {...restprops}>{children}</Group>
}


Card.Title = function CardTitle({ children, ...restprops }) {
    <Title {...restprops}>{children}</Title>
}


Card.SubTitle = function CardSubTitle({ children, ...restprops }) {
    <SubTitle {...restprops}>{children}</SubTitle>
}


Card.Text = function CardText({ children, ...restprops }) {
    <Text {...restprops}>{children}</Text>
}


Card.Meta = function CardMeta({ children, ...restprops }) {
    <Meta {...restprops}>{children}</Meta>
}


Card.Item = function CardItem({ item, children, ...restprops }) {
    const { setItemFeature, setShowFeature } = useContext(FeatureContext)
    return (

        <Item
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}
            {...restprops}>{children}</Item>
    )

}

Card.Image = function CardImage({ ...restprops }) {
    return (
        <Image {...restprops} />
    )
}