import styled from 'styled-components';

export const Top = styled.div`
    background: #5e314d;
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 3rem;
    color: #f5e6e0;
    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
     }
`;

export const Description = styled.div`
    flex: 1;
    padding-right: 3rem;
    padding-left: 5rem;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 1000px) {
        padding: 0;
        align-items: center;
     }
`;

export const Image = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
    }
    padding: 0rem 2.2rem;
    @media (max-width: 1000px) {
        padding: 0;
        img {
            width: 70%;
            margin-top: 1rem;
        }
     }
`;

export const Hide = styled.div`
    overflow: hidden;
`;
