import React, { useContext, useState } from 'react';
import { store } from './Store';
import styled from 'styled-components';
import axios from 'axios';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router-dom';

export default function Signup() {
    let history = useHistory();
    const globalState = useContext(store);
    const { dispatch } = globalState;
    const [photo, setPhoto] = useState(null);

    function responseFacebook(response) {
        console.log('FACEBOOK RESPONSE: ', response);
        var postData = {
            name: response.name,
            email: response.email,
            userId: response.userID
        };

        // TODO -- Set this to a global state.
        setPhoto(response.picture.data.url);

        dispatch({ type: 'ADD_PROFILE_PHOTO', data: { photo: response.picture.data.url } });

        axios.post('http://localhost:8080/sign-up', postData);

        history.push('/myProfile');
    }

    return (
        <Container>
            <FacebookLogin
                appId='510238222921089'
                autoLoad={false}
                fields='name,email,picture'
                callback={responseFacebook}
            />
            {photo ? <img src={photo} alt='Profile photo' /> : null}
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
