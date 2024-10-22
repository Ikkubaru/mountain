import styled from "styled-components";

export const FooterPart = styled.div`
    width: 100%;
    height:80vh;
    top: 220vh;
    background-color: #0B1D26;
    position: relative;
    color: #ffff;
    padding: 7rem;
    @media (max-width: 1024px) {
    padding: 5rem;
    top: 100vh;
    height: 100vh;
  }

  @media (max-width: 768px) { 
    top: 110vh;
    height: 140vh;
    width: 100%;
  }
`
export const LogoFooter = styled.h1`
    font-weight:bold;
    font-size:30px;
    @media (max-width: 768px) {
    font-size: 20px;
  }
`
export const CopyRight = styled.p`
    opacity: 50%;
    font-weight: inherit;
    font-family: arial;
    padding-top: 10rem;
    @media (max-width: 1024px) {
      
  }

  @media (max-width: 768px) {
    padding-top: 3rem;
    position: absolute;
    bottom: 1px;
    padding-bottom: 1rem;
  }
`
export const FooterContainer = styled.div`
    display: flex;
    gap: 13rem;
    @media (max-width: 1024px) {
    gap: 5rem;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    flex-direction: column;

  }
`
export const Paragraph = styled.p`
     font-family: Arial;
    font-size: 25;
    font-weight: bold;
    letter-spacing: 2px;
    padding-top: 1rem;
    @media (max-width: 768px) {
    font-size: 15px;
  }
`
export const FooterTitle = styled.p`
    padding: 1rem;
    font-family: Arial;
    font-size: 25;
    font-weight: bold;
    color:#FBD784;
    @media (max-width: 768px) {
    font-size: 20px;
    padding: 0px;
  }
`
export const ListFooterMenu = styled.ul`
    list-style: none;
    padding: 1rem;
    @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`
export const FooterLinked = styled.a`
    text-decoration: none;
    color: #ffff;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: lighter;
`
export const FooterMenu = styled.div`
    gap: 4rem;
    @media (max-width: 1024px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    gap: none;
  }
`