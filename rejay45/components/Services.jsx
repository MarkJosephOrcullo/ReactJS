import Button from "./Button";
import styles from "./Services.module.css";

const Services = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.label}>
                    <h2>What We <a className={styles.label1}>Do.</a></h2>
                </div>
                <div className={styles.lagayan1}>
                <div className={styles.button1}>
                    <img src="/images/tags.png" width="200" height="auto"/>
                    <h1>Brand Labeling</h1>
                    
                </div>
                <div className={styles.button1}>
                   
                    <img src="/images/web.png" width="200" height="auto"/>
                    <h1>Website Design</h1>
                    
                    
                </div>
                </div>
                <div className={styles.lagayan1}>
                <div className={styles.button1}>
                    
                    <img src="/images/users.png" width="200" height="auto"/>
                    <h1>UI & UX Design</h1>
                    
                    
                </div>
                <div className={styles.button1}>
                   
                    <img src="/images/vid.png" width="200" height="auto"/>
                    <h1>Video Marketing</h1>
                 
                    
                </div>
                </div>
                
            </div>
            
        </div>

    )
    };
export default Services;