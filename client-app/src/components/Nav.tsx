import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { User } from '../models/user';

interface Props {
    users: User[];
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

export default function Nav({users, isLogged, setIsLogged}: Props) {
    const handleLogout = async() => {
        await fetch("https://localhost:5001/api/account/logout", {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               credentials: "include",
           });
           setIsLogged(false);
    }
    let menu;
    if (!isLogged) {
        menu = (
            <>
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
            </>
       
        )
    } else {
        menu = (
            <>
            <h1><Link id = "logo" to = "/">UploadPix</Link></h1>
            <ul>
                <li>
                    <Link to ="/fotografi">Fotografi</Link>
                </li>
                <li>
                    <Link to ="/profil/:username">Profil</Link>
                </li>
                <li>
                    <Link to="/login" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
            </>
        )
    }
    return (
        <StyledNav>
            {menu}
        </StyledNav>
    ); 
}

const StyledNav = styled.nav`
 box-shadow: 0px 5px 30px rgba(0,0,0,0.2);
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
