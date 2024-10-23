import styled from "styled-components";

export const NavContainer = styled.section`
    display:flex;
    gap:25rem;
    margin:2rem;
    color:white;
    align-items: center;
    width: 100%;
    @media (max-width: 1024px) {
        gap: 10rem;
        margin: 1rem;
    }

    @media (max-width: 768px) { 
        gap: 5rem;
        margin: 1rem;
    }
    @media (max-width: 360px) {
        gap: 2rem; 
        margin: 1rem; 
    }
`
export const Menu = styled.div`
    display:flex;
    list-style:none;
    gap:1rem;
    @media (max-width: 768px) { 
        gap: 1rem;
    }
`
export const MenuList = styled.a`
    display: flex;
    gap: 0.5rem;
    text-decoration:none;
    font-family: arial;
    font-weight:bold;
    color:white;
    @media (max-width: 768px) { 
        font-size: 12px;
    }
    @media (max-width: 360px) {
        font-size: 10px;
    }
`
export const Logo = styled.a`
    font-weight:bold;
    font-size:30px;
    margin:2rem;
    @media (max-width: 1024px) { 
        font-size: 24px;
        margin: 1rem;
    }

    @media (max-width: 768px) { 
        font-size: 15px;
        margin: 1rem 0;
    }
    @media (max-width: 360px) {
        font-size: 12px; 
        margin: 0.5rem; 
    }
`