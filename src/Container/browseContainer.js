import React, { useContext, useState, useEffect } from 'react'
import ProfileSelection from './profileContainer'
import { FireBase } from '../context/firebase'
export default function BrowserContainer({ slides }) {
    const { firebase } = useContext(FireBase)
    const user = firebase.auth().currentUser || {}
    const [profile, setprofile] = useState({})
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
            console.log("hi")
        }, 3000);
    }, [profile.displayName])

    return (
        <ProfileSelection user={user} setProfile={setprofile} />
    );
}
