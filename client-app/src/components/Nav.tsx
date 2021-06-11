import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    
    return (
        <StyledNav>
            <h1><Link id = "logo" to = "/">UploadPix</Link></h1>
            <ul>
                <li>
                    <Link to ="/fotografi">Fotografi</Link>
                </li>
                <li>
                    <Link to = "/inregistrare">Inregistreaza-te</Link>
                </li>
                <li>
                    <Link to = "/login">Login</Link>
                </li>
            </ul>
        </StyledNav>
    ); 
}

const StyledNav = styled.nav`
    height: 1vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 5rem;
    a {
        text-decoration: none;
        color: #5e314d;
        padding: 0rem 0.4rem;
    }
    ul {
        display: flex;
        list-style: none;
    }
    h1 {
        font-family: "Parisienne";
        font-weight: bold;
    }
    @media (max-width: 1000px) {
        font-size: 90%;
        display: flex;
        padding: 2rem 2rem;
     }
`;

export default Nav;