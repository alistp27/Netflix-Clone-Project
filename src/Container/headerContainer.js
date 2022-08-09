import React from 'react'
import Header  from '../components/header/index'
import Logo from '../logo.svg'

export  function HeaderContainer({children , ...restpros}) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={'/'} src = {Logo} alt = {'NetFlix'} />
                <Header.ButtonLink to={'/'} > <p>Sign in </p></Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}
