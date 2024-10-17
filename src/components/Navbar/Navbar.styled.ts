import styled from "styled-components";

export const NavContainer = styled.section`
    display:flex;
    gap:25rem;
    margin:2rem;
    color:white;
    @media (max-width: 1024px) { /* Tablet */
        gap: 10rem;
        margin: 1rem;
    }

    @media (max-width: 768px) { /* Mobile */
        gap: 5rem;
        margin: 1rem;
    }
`
export const Menu = styled.div`
    display:flex;
    list-style:none;
    gap:1rem;
    @media (max-width: 768px) { /* Mobile */
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
    @media (max-width: 768px) { /* Mobile */
        font-size: 12px;
    }
`
export const Logo = styled.a`
    font-weight:bold;
    font-size:30px;
    margin:2rem;
    @media (max-width: 1024px) { /* Tablet */
        font-size: 24px;
        margin: 1rem;
    }

    @media (max-width: 768px) { /* Mobile */
        font-size: 15px;
        margin: 1rem 0;
    }
`