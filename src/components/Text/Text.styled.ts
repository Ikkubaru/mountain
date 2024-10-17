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
        gap: 5rem;
        padding-top: 3rem;
    }

    @media (max-width: 768px) {
        gap: 2rem;
        padding-top: 1rem;
        width: 100vw; 
        max-width: 100vw;
        overflow-x: hidden; 
    }
`
export const Line = styled.div`
  width: 72px;
  height: 2px;
  background-color: #FBD784;
  margin: 10px 0;
  @media (max-width: 1024px) { 
      width: 60px;
  }

  @media (max-width: 768px) { 
      width: 50px;
  }
`;
export const SubText = styled.p`
    display: flex;
    font-family:arial;
    font-weight:bold;
    font-size:20px;
    color:#FBD784;
    @media (max-width: 1024px) { /* Tablet */
        font-size: 18px;
    }

    @media (max-width: 768px) { /* Mobile */
        font-size: 16px;
        width: 100vw; /* Sesuaikan lebar */
        max-width: 100vw;
        overflow-x: hidden;
        padding-top: 5vh;
    }
`
export const SubTitle = styled.div` 
    font-size: 82px;
    @media (max-width: 1024px) { /* Tablet */
        font-size: 64px;
    }

    @media (max-width: 768px) { /* Mobile */
        font-size: 30px;
        width: 100vw; /* Sesuaikan lebar */
        max-width: 100vw;
        overflow-x: hidden;
    }
`
export const Scroll = styled.div`
    font-family: Arial;
    font-size: 18px;
    font-weight: bold;
    position: relative;
    @media (max-width: 1024px) { /* Tablet */
        font-size: 16px;
    }

    @media (max-width: 768px) { /* Mobile */
        font-size: 14px;
        width: 100vw; /* Sesuaikan lebar */
        max-width: 100vw;
        overflow-x: hidden;
    }
`