import React, { useContext } from 'react';
import { store } from './Store.js';

export default function Profile() {
    const globalState = useContext(store);

    console.log('GLOBAL STATE: ', globalState);

    return (
        <div>
            <div>{globalState ? <img src={globalState.state.photo} alt='Profile photo' /> : null}</div>
        </div>
    );
}
