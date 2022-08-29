import React,{useContext,createContext,useState} from 'react'
import { ReactDOM } from 'react'
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