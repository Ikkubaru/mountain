import styled from "styled-components";
import ImageOne from "/src/assets/01.png"

export const FirstContainer = styled.div`
    width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
    @media (max-width: 768px) {
    top: 120vh;
  }
`
export const ContainerOne = styled.div`
    padding-left:10rem;
    display: flex;
    gap: 2rem;
    @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`
export const FirstImage = styled.img`
    background-image: url(${ImageOne});
    width: 343px;
    height: 430px;
    background-size: cover;
    @media (max-width: 768px) {
    width: 230px;
    height: 300px;
    background-size: cover;
  }
`
export const LargeText = styled.p`
    font-size: 64px;
    @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
`
export const Paragraph = styled.p`
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    letter-spacing: 1px;
    @media (max-width: 768px) {
    margin: 10px;
    font-size: 15px;
    text-align: justify;
  }
`
export const Linked = styled.a`
    text-decoration: none;
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    cursor: pointer;
    color:#FBD784;
    display: flex;
    @media (max-width: 768px) {
    font-size: 16px;
    justify-content: center;
  }
`
export const Start = styled.h1`
    display: flex;
    color:#FBD784;
    font-size: 18px;
    font-family: arial;
    @media (max-width: 768px) {
    font-size: 16px;
    justify-content: center;
  }
`
export const NumberOne = styled.h1`
    font-family: arial;
    font-size: 170px;
    opacity: 30%;
    position: absolute;
    left: 90px;
    @media (max-width: 1024px) {
    font-size: 130px;
    left: 50px;
  }
  @media (max-width: 768px) {
    font-size: 100px;
    left: 30px;
  }
`
export const Line = styled.div`
  width: 52px;
  height: 2px;
  background-color: #FBD784;
  margin: 10px 0;
  @media (max-width: 768px) {
    margin: 5px;
  }
`;