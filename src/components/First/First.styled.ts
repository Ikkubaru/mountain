import styled from "styled-components";
import ImageOne from "/src/assets/01.png"

export const FirstContainer = styled.div`
    width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
`
export const ContainerOne = styled.div`
    padding-left:10rem;
    padding-top: 3rem;
    display: flex;
    gap: 2rem;
`
export const FirstImage = styled.img`
    background-image: url(${ImageOne});
    width: 343px;
    height: 430px;
    background-size: cover;
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
export const Linked = styled.a`
    text-decoration: none;
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    cursor: pointer;
    color:#FBD784;
    display: flex;
`
export const Start = styled.h1`
    display: flex;
    color:#FBD784;
    font-size: 18px;
    font-family: arial;
`
export const NumberOne = styled.h1`
    font-family: arial;
    font-size: 170px;
    opacity: 30%;
    position: absolute;
    top: -50px;
    left: 90px;
`
export const Line = styled.div`
  width: 52px;
  height: 2px;
  background-color: #FBD784;
  margin: 10px 0;
`;