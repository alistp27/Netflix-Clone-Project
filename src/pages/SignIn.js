import React, { useState, useContext } from "react";
import {useNavigate} from 'react-router-dom';
import { HeaderContainer } from "../Container/headerContainer";
import { FooterContainer } from "../Container/footerContainer";
import { Form } from "../components/form";
import { FireBase } from "../context/firebase";

export function SignIn() {
  const { firebase } = useContext(FireBase);
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const isInValid = Pass === "" || Email === "";
  const history = useNavigate()
  const signinHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPass(Email, Pass)
      .then(() => {
        history('/browse')

      })
      .catch((err) => {
        setEmail("");
        setPass("");
        setError(err.message);
      });
  };
  return (
    <>
      <HeaderContainer buttonToText={'Sign Up'} buttonToLink = {'/signup'}>
        <Form>
          <Form.Title>HI MY NAME IS ALISTP@&</Form.Title>
          {error && <Form.Error> there is an Error</Form.Error>}
          <Form.Base method={"POST"} onSubmit={signinHandler}>
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={Email}
              onChange={({ target }) => setEmail(target.value)}
            />

            <Form.Input
              type="password"
              placeholder="Password"
              value={Pass}
              onChange={({ target }) => setPass(target.value)}
            />

            <Form.Submit disabled={isInValid} type="submit">
              Submit
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to="/signup">Sign Up From Here!</Form.Link>
          </Form.Text>
          <Form.SmallText>
            This Page Is Protected By google reCAPTCHA To Ensure That You Are
            Not A Bot . Learn More.
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
