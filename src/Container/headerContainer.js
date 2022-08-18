import React from 'react'
import Header  from '../components/header/index'
import Logo from '../logo.svg'

export  function HeaderContainer({children ,buttonToLink='/signin',buttonToText = 'Sign in', ...restpros}) {
    
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={'/'} src = {Logo} alt = {'NetFlix'} />
                <Header.ButtonLink to ={buttonToLink} > <p>{buttonToText}</p></Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
