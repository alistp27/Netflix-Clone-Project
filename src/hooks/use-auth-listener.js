import { useState, useEffect, useContext } from "react";
import { FireBase } from '../context/firebase'

export default function useAuthListener(){
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('authUser'))
    )
    
    const {firebase} = useContext(FireBase)

    useEffect(() => {
        const listener = firebase.auth().onAuthstatechanged( (authUser) => {
            if (authUser) {
                localStorage.setItem('authUser',JSON.stringify(authUser))
                setUser(authUser)
            }else{
                localStorage.removeItem('authUser')
                setUser(null)
            }
        } )
    }, [])
    

}