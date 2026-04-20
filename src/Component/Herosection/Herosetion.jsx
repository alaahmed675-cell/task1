import info from "../../assets/Card (1).png"
import styles from "./Herosetion.module.css"          

function Herosetion() { 
    return (
        <div className="container">
            <div className={styles["hero-parent"]}>
                <div className={styles.info}>
                    <h3 className={styles.heroTitle}>
                        The <span className={styles.greenText}>#1</span> Job Board for <br />
                        Hiring or Find your next <br />
                        job in <span className={styles.greenText}>Egypt</span>
                    </h3>
                    <p className={styles.heroDesc}>
                        Each month, more than 3 million job seekers turn to 
                        website in their search for work, 
                        making over 140,000 applications every single day
                    </p>
                </div>
                
                <div className={styles["info-img"]}>
                    <img src={info} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Herosetion;