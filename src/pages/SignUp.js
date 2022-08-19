import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "../Container/headerContainer";
import { FooterContainer } from "../Container/footerContainer";
import { Form } from "../components/form";
import { FireBase } from "../context/firebase";
import 'firebase/auth'

export function SignUp() {
  const { firebase } = useContext(FireBase);
  const [FirstName, setFirstname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const history = useNavigate();
  const isInValid = FirstName === "" || Password === "" || Email === "";

  const handleSignup = (event) => {
    event.preventDefault();

    return firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: FirstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history('/browse');
          })
      )
      .catch((error) => {
        setFirstname('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer buttonToLink={"/signin"} buttonToText={"Sign in"}>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error> there is an Error</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={FirstName}
              onChange={({ target }) => {
                setFirstname(target.value);
              }}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={Email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="true"
              value={Password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInValid} type="submit">
              Submit
            </Form.Submit>

            <Form.Text>
              Already A User? <Form.Link to="/signin">Sign In Here</Form.Link>
            </Form.Text>
            <Form.SmallText>
              This Page Is Protected By google reCAPTCHA To Ensure That You Are
              Not A Bot . Learn More.
            </Form.SmallText>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
