import React, { useContext, useState, useEffect } from 'react'
import ProfileSelection from './profileContainer'
import { FireBase } from '../context/firebase'
import {Loading} from '../components/loading/index'
import Header from '../components/header'
import Logo from '../logo.svg'


export default function BrowserContainer({ slides }) {
    const { firebase } = useContext(FireBase)
    const user = firebase.auth().currentUser || {}
    const [profile, setprofile] = useState({
                                    displayName: null,
                                    photoURL: null}
        )
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
            console.log("hi")
        }, 3000);
    }, [profile.displayName])

    return (profile.displayName?(
        <>
        {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
        <Header src = "joker1" dontShowBackgroundSmallScreens={true}>
            <Header.Frame>
                <Header.Group>
                    <Header.Logo to={'/'} src = {Logo} alt = {'NetFlix'} />
                    <Header.TextLink>Series</Header.TextLink>
                    <Header.TextLink>Films</Header.TextLink>
                </Header.Group>

                <Header.Group>
                    <Header.Profile>
                        <Header.ProfilePicture src ={user.photoURL} />
                            <Header.DropDown>
                                <Header.Group>
                                    <Header.ProfilePicture src ={user.photoURL} />
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                            </Header.DropDown>
                    </Header.Profile>
                </Header.Group>

            </Header.Frame>
            <Header.Feature>
                <Header.Text>Watch Joker Now</Header.Text>
                <Header.TextSmall>
                    Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                    City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                    futile attempt to feel like he's part of the world around him.
                </Header.TextSmall>
            </Header.Feature>
        </Header>
        </>

    ):(

        <ProfileSelection user={user} setProfile={setprofile} />
    )
        
        
    );
}
