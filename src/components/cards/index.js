import React, { useContext, createContext, useState } from "react";
import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Meta,
    Entities,
    Item,
    Image,
} from "./styles/style";
export const FeatureContext = createContext();
export function Card({ children, ...restprops }) {
    const [ShowFeature, setShowFeature] = useState(false);
    const [ItemFeature, setItemFeature] = useState({});
    return (
        <FeatureContext.Provider
            value={{ ShowFeature, setShowFeature, ItemFeature, setItemFeature }}
        >
            <Container {...restprops}>{children}</Container>
        </FeatureContext.Provider>
    );
}

Card.Group = function CardGroup({ children, ...restprops }) {
    return (

        <Group {...restprops}>{children}</Group>
    )
};

Card.Title = function CardTitle({ children, ...restprops }) {
    return (

        <Title {...restprops}>{children}</Title>
    )
};

Card.SubTitle = function CardSubTitle({ children, ...restprops }) {
    return (

        <SubTitle {...restprops}>{children}</SubTitle>
    )
};

Card.Text = function CardText({ children, ...restprops }) {
    return (

        <Text {...restprops}>{children}</Text>
    )
};

Card.Entities = function CardEntities({ children, ...restprops }) {
    return (

        <Entities {...restprops}>{children}</Entities>
    )
};

Card.Feature = function CardFeature({ children, category, ...restprops }) {
    const { ShowFeature, setShowFeature, ItemFeature } = useContext(FeatureContext)
    return (
        ShowFeature?(
            <Feature {...restprops} src = {`/images/${category}/${ItemFeature.genre}/${ItemFeature.slug}/large.jpg`}>
                <Content>
                        <FeatureTitle>{ItemFeature.title}</FeatureTitle>
                        <FeatureText>{ItemFeature.description}</FeatureText>
                        <FeatureClose onClick = {()=> setShowFeature(false)}>
                            <img src="/images/icons/close.png" alt="Close"/>
                        </FeatureClose>
                    <Group alignItems ={"center"}>
                        <Maturity rating = {ItemFeature.maturity}>
                            {ItemFeature.maturity<12?"PG":ItemFeature.maturity}
                        </Maturity>
                        <FeatureText fontWeight ="bold">
                            {ItemFeature.genre.charAt(0).toUpperCase()+ItemFeature.genre.slice(1)}
                        </FeatureText>
                    </Group> 
                {children}
                </Content>
            </Feature>
        ):null
    )
}


Card.Meta = function CardMeta({ children, ...restprops }) {
    return (

        <Meta {...restprops}>{children}</Meta>
    )
};


Card.Item = function CardItem({ item, children, ...restprops }) {
    const { setItemFeature, setShowFeature } = useContext(FeatureContext);
    return (
        <Item
            onClick={() => {
                setItemFeature(item);
                setShowFeature(true);
            }}
            {...restprops}
        >
            {children}
        </Item>
    );
};

Card.Image = function CardImage({ ...restprops }) {
    return <Image {...restprops} />
};
