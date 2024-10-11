import styled from "styled-components";
import ImageThree from "/src/assets/03.png"

export const ThirdContainer = styled.div`
     width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
    `
export const ContainerThree = styled.div`
    padding-left:10rem;
    padding-top: 3rem;
    gap: 2rem;
    display: flex;
`
export const ThirdImage = styled.img`
    background-image: url(${ImageThree});
    width: 343px;
    height: 430px;
    background-size: cover;
    background-position: center;
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
export const SubTitle = styled.h1`
    color:#FBD784;
    font-size: 18px;
    font-family: arial;
    display: flex;
    text-transform: uppercase;
`
export const NumberThree = styled.h1`
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