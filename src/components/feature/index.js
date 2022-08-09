import React from 'react'
import {Title,SubTitle,Container} from './styles/style'
export function Feature({children,...restprops}) {
    return (
        <Container {...restprops}>{children}</Container>
    )
}

Feature.Title = function FeatureTitle ({children,...restprops}){
    return(
        <Title {...restprops}>{children}</Title>
    )
}
Feature.SubTitle = function FeatureSubTitle ({children,...restprops}){
    return(
        <SubTitle {...restprops}>{children}</SubTitle>
    )
}