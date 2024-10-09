import styled from "styled-components";
import BackgroundImg from "/src/assets/image.png";
import BackgroundImg2 from "/src/assets/front.png";

export const Bg = styled.div`
    background-image:url(${BackgroundImg});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:150vh;
    position:absolute;
`
export const Secondbg = styled.div`
    background-image:url(${BackgroundImg2});
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:100vh;
    position:absolute;
`
export const Menuright = styled.div`
    position:relative;
`