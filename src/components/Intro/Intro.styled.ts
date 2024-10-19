import styled from "styled-components";
import BackgroundImg from "/src/assets/image.png";
import SecondBackground from "/src/assets/front.png"

export const Containerone = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`
export const Bg = styled.div`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position: center;
    top: 0;
    left: 0;
    width:100%;
    height:200vh;
    position:absolute;

    @media (max-width: 1024px) { 
        height: 100vh;
        width: 100%;
        background-size: cover;
    }

    @media (max-width: 768px) { 
        height: 100vh;
        width: 100%;
        background-size: cover;
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
        top: 50vh;
        height: 80vh;
        width: 100%;
        background-size: cover;
        overflow: hidden;
    }

    @media (max-width: 768px) { 
        top: 55vh;
        height: 80vh;
        width: 100%;
        background-size: cover;
        overflow: hidden;
    }
`