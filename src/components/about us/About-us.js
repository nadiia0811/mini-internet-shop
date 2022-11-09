import React from 'react';
import './about-us.css';
import { FaRegWindowClose } from 'react-icons/fa';

const AboutUs = (props) => {

    return (
        <div className="about-us">
            <div>
                <h2>About us</h2>
                <FaRegWindowClose className = 'close-btn'
                                  onClick = {props.closeWindow}/>
                <p>The Agata Furniture goes back as far as 1992 when a national furniture 
                production facility, Bytomskie Fabryki Mebli was established. This was 
                the beginning and foundation of our current business.
                </p>
                <p> The company underwent various transformations over the next 30 years, and 
                    finally became a private joint-stock company with solely Polish capital. The 
                    time of privatisation was the beginning of a rapid development, which continues till this day.
                </p>
                <p>Today, Agata has 9 big-box stores, which offer a wide variety of furniture 
                and interior design accessories. Our stores give you access to wares of more 
                than 25 different manufacturers from Poland and abroad and numerous advisors, designers, and experts.
                </p>
            </div>     
        </div>
    )

};

export default AboutUs;