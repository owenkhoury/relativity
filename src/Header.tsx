import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export default function Header() {
    let history = useHistory();

    return (
        <HeaderDiv>
            <RightSideButtons>
                <Button
                    onClick={(e) => {
                        history.push('/signup');
                    }}>
                    BECOME A TUTOR
                </Button>
                <VerticalLine />
                <Button onClick={() => console.log('click')}>SIGN UP</Button>
            </RightSideButtons>
        </HeaderDiv>
    );
}

const RightSideButtons = styled.div`
    display: flex;  
    align-items: center
    height: 4rem;
    margin-right: 1.5rem;
`;

const VerticalLine = styled.div`
    width: 1px; /* Line width */
    background-color: white; /* Line color */
    height: 75%; /* Override in-line if you want specific height. */
    margin-right: 1.5rem;
    margin-left: 1.5rem;
`;

const Button = styled.button`
    height: 50%;
    color: white;
    background: #72b074;
    border: none;
    font-weight: bold;

    font-family: 'Avenir Next' !important;
    font-size: 0.9rem;

    &:hover {
        color: grey;
    }
`;

const HeaderDiv = styled.div`
    display: flex;  
    justify-content: flex-end; /*centers items on the line (the x-axis by default)*/
    align-items: center
    flex-direction: row;
    color: #cf2e38
    width: 100%;
    height: 4rem;
    background: #72B074;
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
