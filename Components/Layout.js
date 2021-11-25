import styles from "../styles/Layout.module.css"
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ({children}) => {
    return ( 
       <>
        <Nav />
        <div className={styles.container}>
          <div className={styles.main}>
          {children}
          </div>
        </div>
        <Footer/>
       </>
     );
}

 
export default Layout;