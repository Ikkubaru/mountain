import styled from "styled-components";

export const MenuSide = styled.div`
    text-decoration:none;
    font-family: arial;
    font-weight:light;
    writing-mode: vertical-lr;
    transform: rotate(360deg);
    display:flex;
    gap:1rem;
    padding:4rem;
    @media (max-width: 1024px) { 
        gap: 0.8rem;
        font-size: 14px; 
    }

    @media (max-width: 768px) { 
        font-size: 12px;
    }
`

