import styles from "./portfolio.module.css"
import fbi from "../../img/app-fbi.png"
import {FaSearch, FaLink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setImgZoom } from "../../redux/actions/actions";

function Portfolio(){
    const dispatch = useDispatch()
    function setSrcImgZoom(src){
        dispatch(setImgZoom(src))
    }
    return (
        <div id="portfolio" className={styles.container_porfolio}>
            <div className={styles.center}>
                <div className={styles.container_title}>
                    <h2>Mi Portafolio</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus et voluptas 
                        quibusdam ducimus molestiae? Fugit exercitationem non laboriosam optio omnis,
                        esse eveniet odit, unde praesentium perspiciatis laudantium incidunt tenetur ipsum.
                    </p>
                </div>
                <div className={styles.container_cards}>
                    <div className={styles.card}>
                        <img src={fbi} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>APP-FBI</h1>
                            <h6>React - Redux</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis 
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <FaSearch onClick={()=>setSrcImgZoom(fbi)}/>
                                </div>
                                <div className={styles.icon}>
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={fbi} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>APP-FBI</h1>
                            <h6>React - Redux</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis 
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <FaSearch/>
                                </div>
                                <div className={styles.icon}>
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={fbi} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>APP-FBI</h1>
                            <h6>React - Redux</h6>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima quis 
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon}>
                                    <FaSearch/>
                                </div>
                                <div className={styles.icon}>
                                    <FaLink/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
              
                </div>
            </div>
        </div>
    )
}
export default Portfolio;