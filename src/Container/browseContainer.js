import React, { useContext, useState, useEffect } from 'react'
import ProfileSelection from './profileContainer'
import { FireBase } from '../context/firebase'
import { Loading } from '../components/loading/index'
import { Card } from '../components/cards/index'
import {FooterContainer} from './footerContainer'
import Header from '../components/header'
import Logo from '../logo.svg'
import Player from '../components/player/index'
import Fuse from 'fuse.js'


export default function BrowserContainer({ slides }) {
    const { firebase } = useContext(FireBase)
    const user = firebase.auth().currentUser || {}
    const [searchTerm, setSearchTerm] = useState('')
    const [Category, setCategory] = useState('series')
    const [SlideRow, setSlideRow] = useState([])
    // with every reload you do , the profile state set to null because maybe you wanted to see movies from another account you have (we cann't have multiaccounts but it's there to feel more like netflix)
    const [profile, setprofile] = useState({
        displayName: null,
        photoURL: null
    }
    )
    const [loading, setloading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setloading(false)
        }, 3000);
    }, [profile.displayName])
    useEffect(() => {
        const fuse = new Fuse(SlideRow, { keys: ['data.description', 'data.title', 'data.genre'] });
        const results = fuse.search(searchTerm).map(({ item }) => item);
    
            if (SlideRow.length > 0 && searchTerm.length > 3 && results.length > 0) {
            setSlideRow(results);
            } else {
            setSlideRow(slides[Category]);
            }
        }, [searchTerm]);
        

    useEffect(() => {
        setSlideRow(slides[Category])
    }, [slides, Category,])

    // Protected Routes,when you are not logged in , you can not access to the Browse page
    return (profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1" dontShowBackgroundSmallScreens={true}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to={'/'} src={Logo} alt={'NetFlix'} />
                        <Header.TextLink active={Category === 'series' ? true : false} onClick={() => setCategory('series')}>Series</Header.TextLink>
                        <Header.TextLink active={Category === 'films' ? true : false} onClick={() => setCategory('films')}>Films</Header.TextLink>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Profile>
                            <Header.Picture src={`/images/users/${user.photoURL}.png`} />
                            <Header.DropDown>
                                <Header.Group>
                                    <Header.Picture src={`/images/users/${user.photoURL}.png`} ></Header.Picture>
                                    <Header.TextLink>{user.displayName}</Header.TextLink>
                                </Header.Group>
                                <Header.Group>
                                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign Out</Header.TextLink>
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
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            <Card.Group>
            
                {SlideRow.map((slideItem) => {return (
                    <Card key={`${Category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>
                            {slideItem.title}
                        </Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item)=>{
                                return(
                                    <Card.Item key = {item.docId} item ={item}>
                                        <Card.Image src ={`/images/${Category}/${item.genre}/${item.slug}/small.jpg`}/>
                                        <Card.Meta>
                                            <Card.SubTitle>{item.title}</Card.SubTitle>
                                            <Card.Text>{item.description}</Card.Text>
                                        </Card.Meta>
                                    </Card.Item>
                                )
                            })}
                        </Card.Entities>
                        <Card.Feature category = {Category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src ={`/videos/bunny.mp4`} />
                            </Player>
                        </Card.Feature>
                    </Card>
                    )} 
                )
            }
            </Card.Group>
            <FooterContainer />
        </>

    ) : (

        <ProfileSelection user={user} setProfile={setprofile} />
    )


    );
}
