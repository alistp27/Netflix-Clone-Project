import React, { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from "../Container/headerContainer";
import { FooterContainer } from "../Container/footerContainer";
import { Form } from "../components/form";
import { FireBase } from "../context/firebase";

export function SignUp() {
  const { firebase } = useContext(FireBase)
  const [FirstName, setFirstname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [error, setError] = useState(null);
  const isInValid = FirstName === '' || Password === "" || Email === "";

  const handleSignUp = (e) =>{
    e.preventDefault()
  }
  return (
    <HeaderContainer buttonToLink={'/signin'} buttonToText ={'Sign in'}>
      <Form>
        <Form.Title>Sign Up</Form.Title>
        {error&& <Form.Error> there is an Error</Form.Error>}
        <Form.Base onSubmit ={handleSignUp} method = "POST">
          <Form.Input placeholder = "First Name" value = {FirstName} onChange = {({target}) =>{setFirstname(target.value)}}></Form.Input>
        </Form.Base>
      </Form>
    </HeaderContainer>
  )
}
