import React from 'react';
import styled from 'styled-components';
import {Top, Description} from '../styles';
import emailjs from 'emailjs-com';

import{ init } from 'emailjs-com';
init("user_NVJ4ICnDBL0DCiVyBG1JN");



const ContactSection = () => {

  function sendEmail(e: { preventDefault: () => void; target: any | HTMLFormElement; }) {
    e.preventDefault();

    emailjs.sendForm('service_photoapp', 'template_trc8v6d', e.target, 'user_NVJ4ICnDBL0DCiVyBG1JN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  }

  return (
    <Left>
        <Description>
            <h3>Ai o sugestie? Contactează-ne!</h3>
        </Description>
        <Form onSubmit={sendEmail}>
             <label>Nume</label>
             <input type="text" name="name" />
             <label>Email (Opțional)</label>
             <input type="email" name="email" />
             <label>Mesaj</label>
            <textarea name="message" />
            <input type="submit" value="Trimite" />
        </Form>
    </Left>
  );
}
const Left = styled(Top)`
    flex: 1;
    height: 100vh;
`;
const Form = styled.form`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 0rem 10rem;
    align-items: center;
    label {
      margin: 1rem 1rem 1rem 0rem;
      align-self: flex-start;
    }
    input {
        border-radius: 0.3rem;
        margin-top: 1rem;
        padding: 0.5rem;
        width: 100%;
    }
    textarea {
        width: 100%;
        height: 20vh;
        border-radius: 0.3rem;
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
    }
    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        align-items: center;
     }
`;

export default ContactSection;