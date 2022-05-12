import styles from "./portfolio.module.css"
import fbi from "../../img/app-fbi.png"
import pokemon_app from "../../img/pokemon-app.png"
import mode_parfum from "../../img/mode-parfum.png"
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
                    <h2>MI PORTAFOLIO</h2>
                    <p>Puedo decir todo lo que sé, pero solo van a ser palabras. Estos son algunos de los proyectos personales que he desarrollado o en los que he participado usando las tecnologías aprendidas hasta el momento.
                    </p>
                </div>
                <div className={styles.container_cards}>
                    <div className={styles.card}>
                        <img src={pokemon_app} alt="pokemon app" />
                        <div className={styles.container_info}>
                            <h1>APP-POKÉMON</h1>
                            <h6>NodeJS - React - Redux</h6>
                            <p>App desarrollada con NodeJS, Express, Sequelize tanto para el backend como para la  base de datos y React, redux, css Module para el Frontend. 
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={()=>setSrcImgZoom(pokemon_app)}>
                                    <FaSearch />
                                </div>
                                <a href="https://front-app-pokemons-pi.vercel.app/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={fbi} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>API-FBI</h1>
                            <h6>React - Redux</h6>
                            <p>APP que consume la api del FBI de gente buscada. Cuenta con filtros por atributos de la persona que se desea buscar. 
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={()=>setSrcImgZoom(fbi)}>
                                    <FaSearch />
                                </div>
                                <a href="https://apifbi.netlify.app/"  target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={mode_parfum} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>MODE PARFUM</h1>
                            <h6 style={{color:"#797979"}}>NodeJS - React - Redux</h6>
                            <p>E-Comerce de artículos de perfumería, cuenta con registro de usuarios, pasarela de pagos, filtros de búsqueda, favoritos y un panel administrador entre otras funciones.  
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={()=>setSrcImgZoom(mode_parfum)}>
                                    <FaSearch />
                                </div>
                                <a href="https://mode-parfum.vercel.app/"  target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
              
                </div>
            </div>
        </div>
    )
}
export default Portfolio;