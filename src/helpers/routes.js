import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Browse } from '../pages/Browse'
// here we have our general Protected Route
export function IsUserRedirect({ user, loggedInPath, children, ...restprops }) {
    const history = useNavigate()

    if (!user) {
        return (
            children
        )
    }

    if (user) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {

            history("/browse", { replace: true })

        }, [history])
        return (
            <Browse />
        )
    }

    return null


}