import Link from "next/link"
import Image from 'next/image'
import image from "../public/Image3.png"
import HeaderStyles from "../styles/Header.module.css";
import Button from "./Button";


const Header = () => {
    return ( 
        <div>
     <header className={HeaderStyles.header}>
     <div className={HeaderStyles.col1}>
               <p><span>Hi</span>, my name is AJ</p>
               <h2>I'm a freelance Digital Marketer & Content Creator </h2>
            
               <Button className={HeaderStyles.button}> <Link href="/contact">Lets Talk</Link></Button>
           </div>
           <div className={HeaderStyles.col2}> 
               <Image className={HeaderStyles.image} src={image}  />
            </div>
   <svg className={ HeaderStyles.svg} id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" >
     <path d="M-314,267 C105,364 400,100 812,279" fill="none" stroke="white" strokeWidth="120" strokeLinecap="round"/>
   </svg>
 </header>
        </div>
     );
}
 
export default Header;

