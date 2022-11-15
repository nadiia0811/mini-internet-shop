import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import './footer.css';

function Footer() {
 return (  
    <div className='contacts' id = 'contacts'>
      <p>Our contacts:</p> 
      <div className='container'>
        <div>
          <BsFillTelephoneFill className='phone'/>
          <span>+48 755 425 991</span>
        </div>
          <div><AiOutlineMail className='mail'/>
          <span>agata_furniture@mail.pl</span></div>    
      </div>    
    </div>  
  )
}

export default Footer;
