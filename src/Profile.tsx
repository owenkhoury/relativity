import React, { useContext } from 'react';
import styled from 'styled-components';
import { store } from './Store.js';
import Header from './Header';

export default function Profile() {
    const { state } = useContext(store);

    return (
        <div>
            <Header shouldShowLogin={false} />
            {state ? <ProfilePhoto style={{ width: '10rem' }} src={state.photo} alt='Profile photo' /> : null}
        </div>
    );
}

const ProfilePhoto = styled.img`
    width: 10rem;
    border: 1px solid black;
    border-radius: 5rem;
    margin-top: 3rem;
    margin-left: 3rem;
`;
