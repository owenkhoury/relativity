import React, { useRef, useState, Fragment } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

// interface Props {
//     history: History;
// }

export default function Header() {
    let history = useHistory();

    return (
        <LoginHeader>
            <Button
                onClick={(e) => {
                    history.push('/signup');
                }}>
                Signup
            </Button>
            <Button onClick={() => console.log('click')}>Login</Button>
        </LoginHeader>
    );
}

const Button = styled.button`
    width: 10rem;
    height: 4rem;
    margin-right: 2rem;

    font-family: 'Avenir Next' !important;
    border: 0.1rem solid red;
    border-radius: 0.5rem;
    font-size: 1rem;

    &:hover {
        -webkit-filter: brightness(50%);
        filter: brightness(50%);
    }
`;

const LoginHeader = styled.div`
    display: flex;  
    justify-content: flex-end; /*centers items on the line (the x-axis by default)*/
    align-items: center
    flex-direction: row;
    color: #cf2e38
    border: 1px solid black;
    width: 100%;
    height: 6rem;
    background: #d8d8d8;
`;

const UserButton = styled.button`
    height: 3rem;
    width: 8rem;
    color: black;
    background: #e5e5e5;
`;

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
