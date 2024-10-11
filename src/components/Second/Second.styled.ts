import styled from "styled-components";
import ImageSecond from "/src/assets/02.jpg"

export const SecondContainer = styled.div`
    width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
`
export const SecondImage = styled.img`
    background-image: url(${ImageSecond});
    background-size: cover;
   width: 343px;
   height: 430px;
`
export const ContainerTwo = styled.div`
    padding-left:10rem;
    padding-top: 3rem;
    display: flex;
    gap: 2rem;
`
export const Two = styled.h1`
    font-family: arial;
    font-size: 170px;
    opacity: 30%;
    position: absolute;
    top: -50px;
    left: 35rem;
`
export const Linked = styled.a`
   color:#FBD784;
    font-size: 18px;
    font-family: arial;
    text-decoration: none;
    font-weight: bold;
`
export const LargeText = styled.p`
    font-size: 64px;
`
export const Paragraph = styled.p`
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    letter-spacing: 1px;
`
export const More = styled.a`
     text-decoration: none;
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    cursor: pointer;
    color:#FBD784;
`