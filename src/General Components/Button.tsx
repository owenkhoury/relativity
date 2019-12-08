import React from "react";
import styled from "styled-components";

export default function Button({onClick, content}) {
    return <ButtonStyle onClick={onClick}>{content}</ButtonStyle>
}

const ButtonStyle = styled.button`
    background-color: blue;
    width: 10rem;
    height: 5rem;
`