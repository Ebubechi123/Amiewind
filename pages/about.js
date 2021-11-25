import CommonStyles from "../styles/CommonStyles.module.css";
import AboutStyles from "../styles/About.module.css";
import Image from  "next/image";
import image from "../public/image2.png"

import Head from 'next/head'
const About = () => {
    return ( 
        <>
        <Head>
     <title>AJWRITER-About</title>
     <meta name="keywords" content="digital marketing content writing blog"/>
   </Head>
       <div className={AboutStyles.container}>
            <h1>About Page</h1>
       </div>
        </>
     );
}
 
export default About;