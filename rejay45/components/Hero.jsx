import styles from "./Hero.module.css";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src="/images/moon.png"/>
                </div>
                <div className={styles.labelbox}>
                    <div className={styles.label}>
                        <h2>WE LEAD IN</h2>
                        <h1>Creativity</h1>
                        <div className={styles.linya}></div>
                        <p>as we design your way into Business Prosper based on your marketing strategy, 
            business needs, and target audience.
                        </p>
                        <div className={styles.button}>  
                            <button>Learn More</button>
                        </div>      
                    </div>
                </div>
               
                     

            </div>
        </div>
    )
  };
  
  export default Hero;