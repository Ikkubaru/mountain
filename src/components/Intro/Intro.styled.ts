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

    `
export const Secondbg = styled.div`
    background-image:url(${SecondBackground});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:120vh;
    position: absolute;
    top: 100vh;
`