import React,{useState} from 'react';

import navStyles from "../styles/Nav.module.css"
import Button from "./Button";
import Link from "next/link"
import { Exit, Menu } from "./Icons";

const Nav = () => {

    const [toggle,setToggle] = useState(false);
    const Toggle =()=>{
        setToggle(!toggle);
        console.log("Clicked")
    }
    return ( 
        <div className={navStyles.nav}>
            <div className={navStyles.logo}>
                <Link href="/" ><h1>AjWriter</h1></Link>
            </div>
            <ul className={toggle ?  navStyles.navopen : navStyles.navclosed } >
                <div  onClick={Toggle} className={navStyles.exit}><Exit/></div>
                <li onClick={Toggle} ><Link  href="/">Home</Link></li>
                <li onClick={Toggle} ><Link href="/about">About</Link></li>
                <li onClick={Toggle} ><Link href="/blog">Blog</Link></li>
                <li onClick={Toggle} ><Link href="/contact">Contact</Link></li>
            </ul>
            <div onClick={Toggle} className={navStyles.menuicon}>
                <Menu  />
            </div>
        </div>
     );
}
 
export default Nav;