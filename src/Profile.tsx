import React, { useContext } from 'react';
import { store } from './Store.js';

export default function Profile() {
    const { state } = useContext(store);

    return (
        <div>
            <div>{state ? <img src={state.photo} alt='Profile photo' /> : null}</div>
        </div>
    );
}
