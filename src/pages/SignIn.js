import React, { useState } from 'react'
import { HeaderContainer } from '../Container/headerContainer'
import { FooterContainer } from '../Container/footerContainer'
import { Form } from '../components/form'

export function SignIn() {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [error, setError] = useState(null)
  const isInValid = Pass ===''|| Email ==='';
  const signinHandler = (event) => {
    event.preventDefault()
  }
  return (
    <>
    <HeaderContainer>
    <Form>
      <Form.Title>HI MY NAME IS ALISTP@&</Form.Title>
      {!error&& <Form.Error> there is an Error</Form.Error>}
      <Form.Base method = {"POST"} onSubmit = {signinHandler}>
        <Form.Input 
          type = "email"
          placeholder = "Email Address"
          value = {Email}
          onChange = {({target})=>setEmail(target.value)}
        />

        <Form.Input 
          type = "password"
          placeholder = "Password"
          value = {Pass}
          onChange = {({target})=>setPass(target.value)}
        />

        <Form.Submit disabled = {isInValid} type = "submit">Submit</Form.Submit>
      </Form.Base>
      <Form.Text>
        New to Netflix? 
        <Form.Link to = "/signup">Sign Up From Here!</Form.Link>
      </Form.Text>
    </Form>
    </HeaderContainer>
    <FooterContainer />
    </>
  )
}
