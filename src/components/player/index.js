import React,{useContext,createContext,useState} from 'react'
import  ReactDOM  from 'react-dom'
import {Container,Button,Overlay,Inner,Close} from './styles/style'

export const PlayerContext = createContext()

export default function Player({children,...restprops}){
    const [ShowPlayer, setShowPlayer] = useState(false)
    return(
        <PlayerContext.Provider value ={{ShowPlayer,setShowPlayer}}>
            <Container {...restprops}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo ({src,...restprops}){
    const {ShowPlayer,setShowPlayer} = useContext(PlayerContext)
    return (
        ShowPlayer ? ReactDOM.createPortal(
            <Overlay onClick ={()=> setShowPlayer(false)}>
                <Inner>
                        <video id = "netflix-player" controls>
                            <source src ={src} type ="video/mp4"/>
                        </video>
                    <Close />
                </Inner>
            </Overlay>,
            document.body
        ):null
    )
}

Player.Button = function PlayerButton ({...restprops}){
    const {ShowPlayer,setShowPlayer} = useContext(PlayerContext)
    return (
        <Button onClick = {() => setShowPlayer(!ShowPlayer)}>
            Play
        </Button>
    )
}