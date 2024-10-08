import styled from "styled-components";

export const Chronicle = styled.div`
    @font-face{
    font-family:'chronicle-display';
    src: url('./assets/font/Chronicle-Display-Semibold.otf') format('opentype');
    font-size:80px;
    font-weight: bold;
    }
    h1 {
    font-family: 'chronicle-display', sans-serif;
    font-size: 80px; /* Ukuran font diatur di sini */
    }
`
export const Title = styled.section`
    position:relative;
    padding-top:5rem;
    display:flex;
    gap:10rem;
    width:100%;
    color:white;
`
export const SubText = styled.p`
    font-family:arial;
    font-weight:bold;
    font-size:20px;
    color:#FBD784;
`