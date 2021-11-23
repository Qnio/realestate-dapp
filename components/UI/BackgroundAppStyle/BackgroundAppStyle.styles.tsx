import styled from "styled-components";

export const HeroContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: #FFFFFF;
    background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12);
`;

export const BackgroundImage = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    object-fit: cover;
    object-position: center bottom;
    vertical-align: bottom;
    width: 100%;
`;


