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
    @media (max-width: 1024px) { /* Tablet */
        padding: 3rem;
        gap: 0.8rem;
        font-size: 14px; /* Sesuaikan ukuran font */
    }

    @media (max-width: 768px) { /* Mobile */
        padding: 2rem;
        gap: 0.5rem;
        font-size: 12px; /* Ukuran font lebih kecil untuk layar sempit */
    }
`

