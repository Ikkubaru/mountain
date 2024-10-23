    import styled from "styled-components";

export const Title = styled.section`
    position:relative;
    padding-top:5rem;
    display:flex;
    gap:10rem;
    width:100%;
    color:white;
    z-index: 10;
    @media (max-width: 1024px) {
        gap: 0.1rem;
        padding-top: 0px;
    }

    @media (max-width: 768px) {
        width: 100%; 
        padding-top: 6rem;
    }
    @media (max-width: 360px) {
        padding-top: 2rem;
        gap: 0.5rem;
    }
`
export const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: #FBD784;
  margin: 10px;
  @media (max-width: 1024px) { 
      width: 60px;
  }

  @media (max-width: 768px) { 
      width: 50px;
  }
  @media (max-width: 360px) {
        width: 40px;
    }
`;
export const SubText = styled.p`
    display: flex;
    font-family:arial;
    font-weight:bold;
    font-size:20px;
    color:#FBD784;
    @media (max-width: 1024px) { 
        font-size: 18px;
    }

    @media (max-width: 768px) {
        font-size: 16px;
        width: 100%;
        overflow-x: hidden;
    }
    @media (max-width: 360px) {
        font-size: 14px;
    }
`
export const SubTitle = styled.div` 
    font-size: 82px;
    @media (max-width: 1024px) {
        font-size: 64px;
    }

    @media (max-width: 768px) { 
        font-size: 30px;
        width: 100%; 
        overflow-x: hidden;
    }
    @media (max-width: 360px) {
        font-size: 30px;
    }
`
export const Scroll = styled.div`
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    @media (max-width: 1024px) { 
        font-size: 16px;
    }

    @media (max-width: 768px) { 
        font-size: 14px;
        width: 100%;
    }
    @media (max-width: 360px) {
        font-size: 12px;
    }
`