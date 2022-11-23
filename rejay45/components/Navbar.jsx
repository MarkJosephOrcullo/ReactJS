import Button from "./Button";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.navbarActions}>
          <a href="#">Services</a>
          <img src="/images/Rejay45.png" width="80" height="auto"/>
          <a href="#">About</a>
        </div>
      </div>
    );
  };
  
  export default Navbar;