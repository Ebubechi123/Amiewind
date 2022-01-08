import Head from 'next/head'
import Form from '../Components/Form';
import Hero from '../Components/Hero';
import Contactcomponent from "../Components/Contact";
import contactStyles from "../styles/Contact.module.css"
const Contact = () => {
    return ( 
        <>
        <Head>
     <title>AJWRITER-Contact Us</title>
     <meta name="keywords" content="digital marketing content writing blog"/>
   </Head>
        <div>
          <div>
            <Hero text={"Contact Page"}/>
          </div>
          < Contactcomponent />
        </div>
        </>
     );
}
 
export default Contact;