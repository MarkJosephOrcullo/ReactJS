import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src="/images/moon.png" />
            </div>
            <div className={styles.label}>
            <h2>WE LEAD IN</h2>
            <h1>Creativity</h1>
            <p>as we desing your way into Business Prosper based on your marketing strategy, 
            business needs, and target audience.
            </p>
            </div>
        </div>
    )
  };
  
  export default Hero;