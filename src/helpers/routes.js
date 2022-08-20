import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Browse } from '../pages/Browse'
import { SignIn } from '../pages/SignIn'
export function IsUserRedirect({ user, loggedInPath, children, ...restprops }) {
    const history = useNavigate()

    if (!user) {
        console.log("HI")
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {

            history("/signin",{ replace: true })
        }, [history])
        return (
            <SignIn />
        )
    }

    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {

        history("/browse",{ replace: true })
            
        }, [history])
        return (
            <Browse />
        )
    }

    return null


}