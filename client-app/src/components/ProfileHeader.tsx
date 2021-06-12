import React from 'react';
import styled from 'styled-components';
import pix from '../img/pix.jpg'
export default function ProfileHeader() {
    return (
       <div>
           <div style={{display:'flex',
            justifyContent:'space-around', 
            margin:'18px 0px'}}>
               <div>
                   <img style={{width: '160px', height: '160px', borderRadius: '80px'}} 
                    src={pix}
                   />
               </div>
               <div>
                   <h1>Nume</h1>
                   <div style={{display:'flex'}}>
                       <h3>Subdomain</h3>
                   </div>
                   <div style={{display:'flex'}}>
                       <h4>Telephone</h4>
                   </div>
               </div>
           </div>
           <div> 
               <h4> Description</h4>
           </div>
           <Gallery>
               <img className="item" src={pix} />
               <img className="item" src={pix} />
               <img className="item" src={pix} />
               <img className="item" src={pix} />
               <img className="item" src={pix} />
               <img className="item" src={pix} />
               <img className="item" src={pix} />
           </Gallery>
       </div> 
    )
}

const Gallery = styled.div`
display:flex;
flex-wrap: wrap;
justify-content: space-between;
    img {
        width: 30%;
        margin: 0.5rem;
    }
`;