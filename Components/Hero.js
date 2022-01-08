import React from 'react';
import HeroStyles from "../styles/Hero.module.css"
const Hero = ({text}) => {
    return ( 
        <>
        <div className={HeroStyles.hero}>
            <h1>{text}</h1>
        </div>
        </>
     );
}
 
export default Hero;