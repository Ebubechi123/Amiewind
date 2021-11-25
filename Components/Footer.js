import FooterStyles from "../styles/Footer.module.css";
import { Whatsapp } from "./Icons";

const Footer = () => {
    return ( 
        <>
        <footer className={FooterStyles.footer}>
          <div className={FooterStyles.row}>
<div className={FooterStyles.rights}>
<p>Rights Reserved By Ajwriter.com 2021</p>
</div>
<div className={FooterStyles.footer_link}> 
<p>Services</p>
<p>Blog</p>
<p>Contact</p>
</div>
<div className={FooterStyles.footer_icons}>
<p><Whatsapp/></p>
</div>
<div className={FooterStyles.developer}>
<p>Built by Ebubechi</p>
</div>
          </div>
        </footer>
        </>
     );
}
 
export default Footer;