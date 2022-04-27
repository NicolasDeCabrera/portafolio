import { useDispatch } from "react-redux";
import styles from "./button.module.css"
import {setMenuPage} from "../../../redux/actions/actions"
function Button({name, id ,icon, active, s, href}){
    const dispatch = useDispatch()
    function handleMenuPage(){
        dispatch(setMenuPage(id))
    }
    return (
        <div onClick={handleMenuPage} className={styles.container}>
            <a href={href} className={styles.container_button}>
                {active?icon:<div style={s} className={styles.icon_hover}>{icon}</div>}
                <div   style={s} className={styles.button}>{name}
                <div className={styles.line_hover}></div>
                </div>
            </a>
            <div className={`${styles.line} ${active&&styles.active}`}></div>
        </div>
    )
}
export default Button;