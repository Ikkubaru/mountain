import styled from "styled-components";
import BackgroundImg from "/src/assets/image.png";

export const Bg = styled.div`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:200%;
    position:absolute;
    z-index: -1;
    /* background-color: #0B1D26; */
    `

export const Menuright = styled.div`
    position:relative;
`