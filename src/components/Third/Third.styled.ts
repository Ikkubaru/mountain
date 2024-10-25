import styled from "styled-components";

export const ThirdContainer = styled.div`
    width: 100%;
    height:100vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
@media (max-width: 1024px) { 
      top: 105vh;
      height:140vh;
      width: 100%;
    }
@media (max-width: 768px) {
    top: 45vh;
    height:170vh;
    width: 100%;
  }
  @media (max-width: 360px) {
    top: 40vh;
    height: 120vh;
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
  @media (max-width: 360px) {
    padding-left: 0.2rem;
    gap: 0.5rem;
  }
`
export const ThirdImage = styled.img`
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
  @media (max-width: 360px) {
    width: 250px;
    height: 350px;
    background-size: cover;
  }
`
export const LargeText = styled.p`
    font-size: 64px;
    @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
  @media (max-width: 360px) {
    font-size: 20px;
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
  @media (max-width: 360px) {
    font-size: 12px;
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
  @media (max-width: 360px) {
    font-size: 12px;
  }
`
export const SubTitle = styled.h1`
    color:#FBD784;
    font-size: 18px;
    font-family: arial;
    display: flex;
    text-transform: uppercase;
    @media (max-width: 480px) {
    font-size: 16px;
  }

  @media (max-width: 360px) {
    font-size: 14px;
    padding-left: 4rem;
  }
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
    top: 25rem;
    left: 4rem;
  }
  @media (max-width: 768px) {
    font-size: 100px;
    left: 30px;
    top: 100vh;
  }
  @media (max-width: 360px) {
    font-size: 70px;
    left: 10px;
    top: 75vh;
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
  @media (max-width: 360px) {
    width: 30px;
  }
`;