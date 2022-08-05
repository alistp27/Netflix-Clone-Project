import React from 'react'
import { Container,Button, Input,Text } from './styles/style'

export default function OptForm({ children, ...restprops }) {
    return (
        <Container {...restprops}>{children}</Container>
    )
}

OptForm.Input = function OptFormInput ({...restprops}){
    return <input {...restprops} />
}

OptForm.Button = function OptFormButton ({children,...restprops}){
    return(
        <Button {...restprops}>
            {children}
            <img src='/images/icons/chevron-right.png' alt='Try Now'/>
        </Button>
    )
}

OptForm.Text = function OptFormText ({children,...restprops}){
    return(
        <Text {...restprops}>
            {children}
        </Text>
    )
}