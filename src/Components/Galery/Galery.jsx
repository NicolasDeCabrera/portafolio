import { useDispatch } from "react-redux";
import { setImgZoom } from "../../redux/actions/actions";
import styles from "./galery.module.css"

function Galery({src}){
   const dispatch = useDispatch()
    function close(){
        dispatch(setImgZoom(""))
   }
    return (
        <div className={styles.container_galery}>
            <img src={src} alt="" />
            <div onClick={close} className={styles.close}>X</div>
        </div>
    )
}
export default Galery;