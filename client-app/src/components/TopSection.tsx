import React from 'react';
import photoshoot from '../img/tabs.svg';
import {Top, Description, Image, Hide} from '../styles';
import { Link } from 'react-router-dom';

const TopSection = () => {
    return (
       <Top>
           <Description>
               <div className = "title">
                   <Hide>
                       <h2>UploadPix</h2>
                   </Hide>
                   <Hide>
                      <h3>Găsește <span>fotograful potrivit</span> pentru tine!</h3> 
                   </Hide>
               </div>
               <p>Alege, dintr-o gamă largă, fotograful potrivit evenimentului pe care îl cauți: nuntă, botez sau o ședință foto.</p>
            <button>
            <Link to ="/fotografi" style={{textDecoration: 'inherit', color: 'inherit'}}>Caută Fotografi </Link></button>
           </Description>
           <Image>
               <img src = {photoshoot} alt = "illustration" />
           </Image>
       </Top> 
    );
}

//styled components

export default TopSection;