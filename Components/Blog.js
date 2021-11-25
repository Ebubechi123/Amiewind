import Styles from "../styles/CommonStyles.module.css";
import Image from 'next/image'

const Blog = () => {
    return ( 
        <>
        <div className={Styles.container}>
        <div className={Styles.title}>
            <h2>Blog</h2>
            </div>
            <div className={ Styles.subtitle}>
            <p>Recent Articles</p>
            </div>
            <div className={Styles.row}>
                
            </div>
        </div>
        </>
     );
}
 
export default Blog;