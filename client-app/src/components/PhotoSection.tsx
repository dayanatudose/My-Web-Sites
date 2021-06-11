import React from 'react';
//Import icons
import free from '../img/free.svg';
import world from '../img/world-wide.svg';
import calendar from '../img/invoice.svg';
import photography from '../img/photo.png';
import gallery from '../img/upload.svg';
import styled from 'styled-components';
import {Top, Description, Image} from '../styles';

const PhotoSection = () => {
    return (
        <Photo>
         <Image>
            <img src = {gallery} alt = "" />
         </Image>
            <Description>
                <h2>Ești <span>fotograf</span>? Nu ezita să te <span>înscrii!</span></h2>
                <Cards>
                   <Card>
                     <div className = "icon">
                        <img src={free} alt = ""/>
                        <h3>Gratis</h3>
                     </div> 
                     <p>Este gratis sa îți creezi un cont pe platforma noastră.</p> 
                   </Card> 
                   <Card>
                     <div className = "icon">
                        <img src={world} alt = ""/>
                        <h3>Expunere</h3>
                     </div> 
                     <p>Obții o expunere mai mare fiind înscris pe platforma noastră.</p> 
                   </Card> 
                   <Card>
                     <div className = "icon">
                        <img src={photography} alt = ""/>
                        <h3>Portofoliu</h3>
                     </div> 
                     <p>Ai posibilitatea de îmbunătățire a portofoliului personal.</p> 
                   </Card> 
                   <Card>
                     <div className = "icon">
                        <img src={calendar} alt = "" />
                        <h3>Organizare</h3>
                     </div> 
                     <p>Fii mai organizat cu evidența plăților tale.</p> 
                   </Card> 
                </Cards>
            </Description>  
        </Photo>
    )
}

const Photo = styled(Top)`
    background-color: #f5e6e0;
    h2 {
        color: #5e314d;
        padding-bottom: 5rem;
    }
    h3 {
        color: #5e314d;
    }
    p {
        color: #5e314d;
        width: 70%;
        padding: 1rem 0rem 2rem 0rem;
    }
    @media (max-width: 1000px) {
        display: block;
        padding: 2rem 2rem;
        text-align: center;
        align-items: center;
        justify-content: center;
     }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1000px) {
        justify-content: center;
     }
`;

const Card = styled.div`
    flex-basis: 15rem;
    .icon {display: flex;
           align-items: center;
           img {
            height: 8vh;
           }
        }
    h3 {
        margin-left: 0.5rem;
        background: #e49ab0;
        border-radius: 0.1rem;
        color: #5e314d;
        padding: 1rem;
    }
    @media (max-width: 1000px) {
        justify-content: flex-start;
     }
`;

export default PhotoSection;