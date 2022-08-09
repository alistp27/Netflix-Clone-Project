import React  from 'react'
import { Link } from 'react-router-dom' 
import {BackGround,Container,Logo,ButtonLinks} from './styles/style'
export default function Header({ bg = true,children, ...restpros }) {
    return (
        bg ? <BackGround {...restpros}>{children}</BackGround> : children
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

Header.ButtonLink = function ButtonLink ({children,...restpros}){
    return(
        <ButtonLinks {...restpros}>{children}</ButtonLinks>
    )
}
