import Image from 'next/image';
import Link from "next/link"
import Styles from "../styles/CommonStyles.module.css";
import BioStyles from "../styles/Bio.module.css";
import image from "../public/30.png"
import Button from "./Button";
const Bio = () => {
    return ( 
        <>
        <div className={Styles.container}>
        
            <div className={Styles.row}>
                <div className={Styles.col}>
                <Image className={BioStyles.image} src={image} width="400px" height="400px" alt="" />
                </div>
                <div className={Styles.col}>
                <div className={BioStyles.title}>
            <h2>About AJ</h2>
            </div>
            <div className={ BioStyles.subtitle}>
            <p>Providing Quality Service <br/> To You</p>
            </div>
            <div className={ BioStyles.text}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            </p>
            </div>
            <Button className={BioStyles.button}><Link href="/about">Discover More</Link></Button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Bio;