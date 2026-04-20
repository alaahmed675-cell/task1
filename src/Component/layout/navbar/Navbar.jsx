import logo from "../../../assets/Button container.png"
import styles from "./Navbar.module.css"

function Navbar() {
    console.log(styles);
    return (
        <nav className="container-fluid"> 
            <div className="container">
                <div className={styles["nav-parent"]}>
                    <div className={styles.logo}> 
                        <img src={logo} alt="Logo" />
                    </div>
                    
                    <div className={`${styles["nav-info"]} d-flex`}>
                        <ul className={`${styles.links} d-flex`}>
                          
                            <li className={styles.active}>home</li>
                            <li>find</li>
                            <li>about</li>
                            <li>contact</li>
                        </ul>
                        
                        <div className={styles["goup-btns"]}> 
                            <button className={styles.regBtn}>registar</button>
                            <button className={styles.loginBtn}>login</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;