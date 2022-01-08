import React,{useState} from 'react';
import svg1 from "../public/undraw_blogging_re_kl0d.svg";
import svg2 from "../public/undraw_content_creator_re_pt5b.svg";
import svg3 from "../public/undraw_mobile_marketing_re_p77p.svg";
import Styles from "../styles/CommonStyles.module.css";
import ServicesStyles from "../styles/Services.module.css"
import Card from './Card';
const Sevices = () => {
const [icons] = useState([
  {
    icon:svg1,
    text:"Digital Marketing"
  },
  {
    icon:svg2,
    text:"Content Creation"
  },
  {
    icon:svg3,
    text:"Blog"
  }
])
    return (
        <>
        <div className={Styles.container}>
            <div className={Styles.title}>
            <h2>Services</h2>
            </div>
            <div className={ Styles.subtitle}>
            <p>What I Offer</p>
            </div>
            <div className={ Styles.text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            </div>

            <div className={Styles.row}>
             {icons.map(icon=>(
               <Card key={icon.text} className={ServicesStyles.card} image={icon.icon} text={icon.text} />
             ))}
            </div>
        </div>
        </>
      );
}
 
export default Sevices;