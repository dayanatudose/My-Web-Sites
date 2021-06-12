import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import {Top, Image} from '../styles';
import focus from '../img/focus.svg';
import { Redirect } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        e.preventDefault(); 
           await fetch("https://localhost:5001/api/account/login", {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               credentials: "include",
               body: JSON.stringify({
                  email,
                  password 
               })
           });
           setRedirect(true);
    };
    if (redirect) {
        return <Redirect to="/" exact/>
       }
    return (
    <Container>
        <Image>
            <Title>Bine ai revenit!</Title>
            <img src = {focus} alt="" />
        </Image>
        <Box>
        <LogForm onSubmit = {handleSubmit}>
             <label>Email</label>
             <input 
             type="email" 
             id="email" 
             placeholder="Email" 
             onChange={e => setEmail(e.target.value)} 
             />
             <label>Parola</label>
             <input 
             type="password" 
             id="password" 
             placeholder="Parola" 
             onChange={e => setPassword(e.target.value)}
            />
            <input type="submit" value="Login" />
        </LogForm>
        </Box>
    </Container>
    ) 
}
const Title = styled.h1`
    padding: 0.5rem 6rem;
`;
const Box = styled.div`
    flex: 1;
    height: 65vh;
    display: flex;
    align-items: center;
    background: rgba(245, 230, 224,0.4); 
    border-radius: 1rem;
    margin: 1rem 1rem;
    @media (max-width: 1000px) {
        width: 100%;
        align-self: center;
        align-items:center;
        margin: 0.5rem 0rem;
     }
`;
const Container = styled(Top)`
    min-height: 70vh;
    padding: 2.7rem;
    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        align-items: center;
        justify-content: center;
     }
`;

const LogForm = styled.form`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0rem 4rem;
    align-items: center;
    label {
      margin: 1rem 1rem 1rem 0rem;
      align-self: flex-start;
      font-weight: bold;
      @media (max-width: 1000px) {
        display: block;
        font-weight: bold;
     }
    }
    input {
        border-radius: 0.3rem;
        margin-top: 1rem;
        padding: 0.5rem;
        width: 90%;
        @media (max-width: 1000px) {
        padding: 1.1rem;
        width: 100%;
     }
    }
    input[type='submit'] {
        margin-top: 2rem;
        width: 70%;
        justify-content: center;
        background-color: #f5e6e0;
        border: none;
        padding: 0.5rem;
        font-family: 'Inter', sans-serif;
        font-weight: bolder;
        font-size: larger;
        cursor: pointer;
        color: #5e314d;
        @media (max-width: 1000px) {
        padding: 1.1rem;
        width: 50%;
     }
    }
    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 5rem;
        align-items: center;
     }
`;

export default Login;