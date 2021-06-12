import React, { SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import {Top, Image} from '../styles';
import register from '../img/register.svg';
import { Redirect } from 'react-router';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = async (e: SyntheticEvent) => {
           e.preventDefault(); 
           await fetch("https://localhost:5001/api/account/register", {
               method: 'POST',
               headers: {"Content-Type": "application/json"},
               body: JSON.stringify({
                  username,
                  email,
                  telephone,
                  password 
               })
           });

           setRedirect(true);
       }
       if (redirect) {
        return <Redirect to="/login"/>
       }
      
    return (
    <Container>
        <Image>
            <Title>Bine ai venit! Fa-ti un cont nou si obtine clienti!</Title>
            <img src = {register} alt="" />
        </Image>
        <Box>
        <LogForm onSubmit={handleSubmit}>
            <label>Nume</label>
             <input 
             type="name" 
             id="Username"
              placeholder="Introduceti numele"
              onChange={e => setUsername(e.target.value)} />
             <label>Email</label>
             <input 
             type="email" 
             id="Email" 
             placeholder="Introduceti email-ul"
             onChange={e => setEmail(e.target.value)} />
             <label>Numar de telefon</label>
             <input
              type="tel"
               id="Telephone"
             placeholder="Introduceti numarul de telefon"
             onChange={e => setTelephone(e.target.value)}/>
             <label>Parola</label>
             <input 
             type="password" 
             id="Password"
              placeholder="Introduceti parola"
              onChange={e => setPassword(e.target.value)}/>
            <input 
            type="submit" 
            value="Inregistreaza-te" />
        </LogForm>
        </Box>
    </Container>
    ) 
}
const Title = styled.h1`
    padding: 0.5rem 2rem;
`;
const Box = styled.div`
    flex: 1;
    height: 75.5vh;
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
      margin-top: 1rem;
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

export default Register;


