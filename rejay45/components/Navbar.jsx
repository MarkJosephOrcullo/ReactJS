import Button from "./Button";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.navbarActions}>
          <Button variant="primary">Services</Button>
          <img src="/images/Rejay45.png" width="140" height="60"/>
          <Button variant="primary">About Us</Button>
        </div>
      </div>
    );
  };
  
  export default Navbar;