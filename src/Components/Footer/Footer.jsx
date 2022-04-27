import styles from "./footer.module.css"
import { FaCaretUp } from "react-icons/fa";

function Footer(){
    return (
        <>
            <div className={styles.container_footer}>
            <div className={styles.container_button}>
                <a href="#home" className={styles.button_up}>
                    <FaCaretUp></FaCaretUp>
                </a>
            </div>    
                <p>Design & Development By Alfredo Nicolas De Cabrera</p>
            </div>
        </>
    )
}
export default Footer;