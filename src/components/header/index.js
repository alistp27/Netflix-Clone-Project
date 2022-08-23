import React  from 'react'
import { Link } from 'react-router-dom' 
import {BackGround,Container,Logo,ButtonLinks, Feature,Text,TextSmall,TextLink,Group} from './styles/style'
export default function Header({ bg = true,children, ...restpros }) {
    return (
        bg ? <BackGround {...restpros}>{children}</BackGround> : children
    )
}

Header.Feature = function HeaderFeature ({children,...restpros}){
    return(
        <Feature {...restpros}>{children}</Feature>
    )
}

Header.Text = function HeaderText ({children,...restprops}){
    return(
        <Text {...restprops}>{children}</Text>
    )
}

Header.TextLink = function HeaderTextLink ({children,...restprops}){
    return(
        <TextLink {...restprops}>{children}</TextLink>
    )
}

Header.TextSmall = function HeaderTextSmall ({children,...restprops}){
    return(
        <TextSmall {...restprops}>{children}</TextSmall>
    )
}

Header.Logo = function HeaderLogo ({to,...restpros}){
    return(
        <Link to={to}  >
            <Logo {...restpros} />
        </Link>
    )
}

Header.Frame = function HeaderFrame ({children,...restpros}){
    return(
        <Container {...restpros}>{children}</Container>
    )
}

Header.Group = function HeaderGroup ({children,...restpros}){
    return(
        <Group {...restpros}>{children}</Group>
    )
}

Header.ButtonLink = function ButtonLink ({children,...restpros}){
    return(
        <ButtonLinks {...restpros}>{children}</ButtonLinks>
    )
}
