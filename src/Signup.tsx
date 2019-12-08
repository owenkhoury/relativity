import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import FacebookLogin from 'react-facebook-login';
export default function Signup() {
    function responseFacebook(response) {
        console.log('FACEBOOK RESPONSE: ', response);
        var postData = {
            name: response.name,
            email: response.email,
            userId: response.userID
        };

        axios.post('http://localhost:8080/sign-up', postData);
    }

    return (
        <Container>
            <FacebookLogin
                appId='510238222921089'
                autoLoad={false}
                fields='name,email,picture'
                callback={responseFacebook}
            />
        </Container>
    );
}

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
