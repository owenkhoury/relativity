import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Signup() {
  const [focus, setFocus] = useState(null);

  // Signup refs
  const signupEmailRef = useRef(null);
  const signupPasswordRef = useRef(null);

  return (
    <Container>
      <Heading>Create Account</Heading>
      <CreateAccount>
        Have one? <TextLink onClick={null}>Log In</TextLink>
      </CreateAccount>
      <LoginInput
        ref={signupEmailRef}
        focus={focus === "email"}
        placeholder={"Email Address"}
        onClick={() => {
          null;
        }}
      />
      <LoginInput
        ref={signupPasswordRef}
        type="password"
        focus={focus === "password"}
        placeholder={"Password"}
        onClick={() => {
          setFocus("password");
        }}
      />

      <LoginButton
        onClick={() => {
          const request = {
            userId: "gopals a cool guy",
            password: "password123"
          };
          axios.post("http://localhost:8080/login", request).then(res => {
            console.log(res);
          });
        }}
      >
        Create Account
      </LoginButton>
    </Container>
  );
}

const TextLink = styled.u`
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: center; /*centers items on the cross-axis (y by default)*/
`;

const Login = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; /*centers items on the line (the x-axis by default)*/
  align-items: center; /*centers items on the cross-axis (y by default)*/
`;

const Heading = styled.h1`
  color: black;
  font-size: 1.64rem;
  font-family: "Avenir Next" !important;
`;

const CreateAccount = styled.h1`
  color: "#A9A9A9";
  font-size: 1rem;
  margin-top: 1rem;
  font-family: "Avenir Next" !important;
`;

const LoginInput = styled.input<{ focus }>`
  height: 3rem;
  width: 18rem;
  border: none;
  font-size: 1em;
  margin-top: 2rem;

  padding-left: 1rem;
  font-family: "Avenir Next" !important;

  background-color: ${props => (props.focus ? "#e5e5e5" : "transparent")};
  border-bottom: ${props =>
    props.focus ? "3px solid transparent" : "2px solid black"};
`;

const LoginButton = styled.button`
  height: 3rem;
  width: 19rem;
  color: black;
  background: #d8d8d8;
  border: none;
  font-size: 1.1rem;
  margin-top: 2rem;

  padding-left: 1rem;
  border-radius: 0.3rem;
  font-family: "Avenir Next" !important;
`;

const ErrorMessage = styled.h1`
  margin-top: 1.5rem;
  color: #cf2e38;
  font-size: 1rem;
  font-family: "Avenir Next" !important;
`;
