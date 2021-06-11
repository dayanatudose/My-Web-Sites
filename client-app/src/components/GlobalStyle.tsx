import {createGlobalStyle} from 'styled-components'; 

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        @media (max-width: 1000px) {
        font-size: 80%;
        }
        
    }
    body {
        background-color: #f5e6e0;
        font-family: 'Inter', sans-serif;
        font-weight: bolder;
    }
    button {
        text-decoration: none;
        font-weight: bolder;
        font-family: 'Inter', sans-serif;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 0.5rem 2rem;
        border: 3px solid #e49ab0;
        border-radius: 1rem;
        background: transparent;
        color: #e49ab0;
        transition: all 0.5 ease;
        &:hover {
            background-color: #e49ab0;
            color: #5e314d;
        }
    }
    h2 {
        font-weight: bolder;
        font-size: 2rem;
    }
    p {
        padding: 2rem 0rem;
        font-size: 1rem;
        line-height: 150%;
        font-weight: bolder;
    }
    h3 {
        font-weight: bolder;
    }
    span {
        font-weight: bolder;
        color: #e49ab0;
    }
    
`;

export default GlobalStyle;