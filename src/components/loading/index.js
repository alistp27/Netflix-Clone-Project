import React from 'react'
import { Spinner,Lockbody,Picture,Releasebody } from './styles/style'

export  function Loading({src,...restprops}){
    return(
        <Spinner {...restprops}>
            <Lockbody />
            <Picture src = {`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
    return(
        <Releasebody />
    )
}