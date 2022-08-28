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
    <Group {...restprops}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...restprops }) {
    <Title {...restprops}>{children}</Title>;
};

Card.SubTitle = function CardSubTitle({ children, ...restprops }) {
    <SubTitle {...restprops}>{children}</SubTitle>;
};

Card.Text = function CardText({ children, ...restprops }) {
    <Text {...restprops}>{children}</Text>;
};

Card.Entities = function CardEntities({ children, ...restprops }) {
    <Entities {...restprops}>{children}</Entities>;
};

Card.Meta = function CardMeta({ children, ...restprops }) {
    <Meta {...restprops}>{children}</Meta>;
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
    return <Image {...restprops} />;
};
