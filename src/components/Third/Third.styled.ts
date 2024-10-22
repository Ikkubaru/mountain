import styled from "styled-components";
import ImageThree from "/src/assets/03.png"

export const ThirdContainer = styled.div`
     width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
@media (max-width: 1024px) { 
      top: 120vh;
      height:140vh;
      width: 100%;
    }
@media (max-width: 768px) {
    top: 120vh;
    height:150vh;
    width: 100%;
  }
    `
export const ContainerThree = styled.div`
    padding-left:10rem;
    padding-top: 3rem;
    gap: 2rem;
    display: flex;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    width: 100%;
  }
`
export const ThirdImage = styled.img`
    background-image: url(${ImageThree});
    width: 343px;
    height: 430px;
    background-size: cover;
    background-position: center;
    @media (max-width: 1024px) {
    width: 230px;
    height: 300px;
    background-size: cover;
  }
  @media (max-width: 768px) {
    width: 350px;
    height: 500px;
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
    @media (max-width: 1024px) {
    font-size: 130px;
    left: 50px;
  }
  @media (max-width: 768px) {
    font-size: 100px;
    left: 30px;
    top: 100vh;
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