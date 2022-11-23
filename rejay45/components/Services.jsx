import styles from "./Services.module.css";

const Services = () => {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.label}>
                    <h2>What We Do.</h2>
                </div>
                <div className={styles.container1}>
                    <div className={styles.image1}>
                        <img src="/images/tags.png"/>
                    </div>
                </div>
                <div className={styles.container2}>
                    <div className={styles.image2}>
                        <img src="/images/web.png"/>
                    </div>
                </div>
                <div className={styles.container3}>
                    <div className={styles.image3}>
                        <img src="/images/users.png"/>
                    </div>
                </div>
                <div className={styles.container4}>
                    <div className={styles.image4}>
                        <img src="/images/vid.png"/>
                    </div>
                </div>
            </div>
            
        </div>

    )
    };
export default Services;