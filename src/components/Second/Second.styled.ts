import styled from "styled-components";

export const SecondContainer = styled.div`
    width: 100%;
    height:120vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
@media (max-width: 1024px) { 
      top: 110vh;
      height:140vh;
      width: 100%;
    }
@media (max-width: 768px) {
    top: 60vh;
    height:175vh;
  }
  @media (max-width: 360px) {
    height: 120vh;
    top: 5vh;
  }
`
export const SecondImage = styled.img`
    background-size: cover;
    width: 343px;
    height: 430px;
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
    width: 170px;
    height: 250px;
    background-size: contain;
    }
`
export const ContainerTwo = styled.div`
    padding-left:10rem;
    padding-top: 3rem;
    display: flex;
    gap: 2rem;
@media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 768px) {
    padding-left: 1rem;
    width: 100%;
  }
  @media (max-width:360px){
    padding-left: 0.5rem;
    gap: 1rem;
  }
`
export const Two = styled.h1`
    font-family: arial;
    font-size: 170px;
    opacity: 30%;
    position: absolute;
    top: -50px;
    left: 35rem;
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
    font-size: 80px;
    left: 15px;
    top: 65vh;
  }
`
export const Linked = styled.a`
   color:#FBD784;
    font-size: 18px;
    font-family: arial;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    @media (max-width: 360px) {
    padding-left: 5rem;
    font-size: 14px;
    align-items: center;
    font-weight: lighter;
  }
`
export const LargeText = styled.p`
    font-size: 64px;
    @media (max-width: 768px) {
    font-size: 28px;
    text-align: center;
  }
  @media (max-width: 360px) {
    font-size: 24px;
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
    font-size: 13px;
  }
`
export const More = styled.a`
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
    font-size: 14px;
  }
`
export const Line = styled.div`
  width: 52px;
  height: 2px;
  background-color: #FBD784;
  margin: 10px 0;
  @media (max-width: 360px) {
    width: 40px;
    margin: 10px;
  }
`;