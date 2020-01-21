import React, { useContext, useState } from 'react';
import { store } from './Store';
import styled from 'styled-components';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import FacebookLogo from './images/facebook_logo.png';

export default function Signup() {
    let history = useHistory();
    const globalState = useContext(store);
    const { dispatch } = globalState;

    function responseFacebook(response) {
        console.log('FACEBOOK RESPONSE: ', response);
        var postData = {
            name: response.name,
            email: response.email,
            userId: response.userID
        };

        dispatch({ type: 'ADD_PROFILE_PHOTO', data: { photo: response.picture.data.url } });
        axios.post('http://localhost:8080/sign-up', postData);
        history.push('/myProfile');
    }

    return (
        <Container>
            <Header shouldShowLogin={true} />
            <SignUpContainer>
                <MainText>Create Account</MainText>
                <SubText>
                    Have an Account? <Underline>Log In</Underline>
                </SubText>
                <IntegrationsContainer>
                    <FacebookLogin
                        appId='510238222921089'
                        autoLoad={false}
                        fields='name,email,picture'
                        callback={responseFacebook}
                        render={(renderProps) => (
                            <FacebookButton onClick={renderProps.onClick}>
                                Continue with Facebook
                                <img style={{ marginLeft: '2.5rem', width: '2rem' }} src={FacebookLogo} />
                            </FacebookButton>
                        )}
                    />
                    <VerticalLine />
                    <FacebookLogin
                        appId='510238222921089'
                        autoLoad={false}
                        fields='name,email,picture'
                        callback={responseFacebook}
                        render={(renderProps) => (
                            <FacebookButton onClick={renderProps.onClick}>
                                Continue with Facebook{' '}
                                <img style={{ marginLeft: '2.5rem', width: '2rem' }} src={FacebookLogo} />
                            </FacebookButton>
                        )}
                    />
                </IntegrationsContainer>
            </SignUpContainer>
        </Container>
    );
}

const MainText = styled.div`
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: bold;
`;

const SubText = styled.div`
    display: flex;
    color: #7f7d7d;
    font-size: 1rem;
`;

const Underline = styled.div`
    text-decoration: underline;
    padding-left: 0.25rem;
`;

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80%; // TODO -- CALCULATE THE ACTUAL PERCENTAGE
    margin-top: 4rem;
    font-family: 'Avenir Next';
`;

const IntegrationsContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    align-items: center;
    height: 50%;
    font-family: 'Avenir Next';
`;

const VerticalLine = styled.div`
    width: 1px; /* Line width */
    background-color: #7f7d7d; /* Line color */
    height: 75%; /* Override in-line if you want specific height. */
    margin-right: 3rem;
    margin-left: 3rem;
`;

const FacebookButton = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 0.75rem;
    border-radius: 0.125rem;

    &:hover {
        opacity: 0.5;
    }
`;

const Container = styled.div`
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: top; /*centers items on the line (the x-axis by default)*/
    align-items: center; /*centers items on the cross-axis (y by default)*/
`;
