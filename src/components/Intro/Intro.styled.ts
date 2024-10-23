import styled from "styled-components";
import BackgroundImg from "/src/assets/image.png";
import SecondBackground from "/src/assets/front.png"

export const Containerone = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    @media (max-width: 1024px) {
        align-items: center;
        width: 100%;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
    @media (max-width: 360px) {
        width: 100%;
    }
`
export const Bg = styled.div`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    top: 0;
    left: 0;
    width:100%;
    height:200vh;
    position:absolute;

    @media (max-width: 1024px) { 
        height: 100vh;
        background-size: cover;
    }

    @media (max-width: 768px) { 
        height: 100vh;
        background-size: cover;
        padding: 0;
    }
    @media (max-width: 360px) {
        background-size: contain;
        overflow-x: hidden;
    }
    `
export const Secondbg = styled.div`
    background-image:url(${SecondBackground});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:120vh;
    position: absolute;
    top: 100vh;

    @media (max-width: 1024px) { 
        top: 40vh;
        height: 80vh;
        background-size: cover;
    }

    @media (max-width: 768px) { 
        background-size: cover;
    }
    @media (max-width: 360px) { 
        background-size: contain; 
        overflow-x: hidden;
    }
`