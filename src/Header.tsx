import React, { useRef, useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Button from './General Components/Button';
import { useHistory } from 'react-router-dom';

// interface Props {
//     history: History;
// }

export default function Header() {
    let history = useHistory();

    return (
        <Fragment>
            <LoginHeader>
                <Button
                    content='Sign up'
                    onClick={(e) => {
                        history.push('/signup');
                    }}
                />
                <Button content='Login' onClick={() => console.log('click')} />
            </LoginHeader>
        </Fragment>
    );
}

// const request = {
//     userId: 'owen',
//     password: 123
// };

// const header = {
//     ContentType: "application/json"
// };

// axios
//     .post("http://localhost:8080/login", request, {
//         headers: { header }
//     })
//     .then(res => {
//         console.log(res);
//     });

const LoginHeader = styled.div`
    color: #cf2e38
    border: 1px solid black;
    width: 100%;
    height: 6rem;
    background: #d8d8d8;
    display: flex;
    justify-content: space-evenly; /*centers items on the line (the x-axis by default)*/
    align-items: center
    flex-direction: row;
`;

const UserButton = styled.button`
    height: 3rem;
    width: 8rem;
    color: black;
    background: #e5e5e5;

    font-family: 'Avenir Next' !important;
`;
