import React from 'react'
import Header  from '../components/header/index'
import {Profiles} from '../components/profiles/index'
import Logo from '../logo.svg'

export default function ProfileSelection({user,setProfile}){
    return(
        <>
            <Header bg = {false}>
                <Header.Frame>
                    <Header.Logo src ={Logo} alt ={"NetFlix"} to ={"/"}/>
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who is watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick = {
                            () =>{
                                setProfile({
                                    displayName: user.displayName,
                                    photoURL: user.photoURL
                                })
                            }
                        }
                    >
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}