import styles from "./portfolio.module.css"
import fbi from "../../img/app-fbi.png"
import pokemon_app from "../../img/pokemon-app.png"
import bestcard from "../../img/bestcard.png"
import somos_juventudes from "../../img/somos_juventudes.png"
import promtel from "../../img/promtel.png"
import accessgo from "../../img/accessgo.png"
import { FaSearch, FaLink } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setImgZoom } from "../../redux/actions/actions";

function Portfolio() {
    const dispatch = useDispatch()
    function setSrcImgZoom(src) {
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
                                <div className={styles.icon} onClick={() => setSrcImgZoom(pokemon_app)}>
                                    <FaSearch />
                                </div>
                                <a href="https://front-app-pokemons-pi.vercel.app/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
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
                                <div className={styles.icon} onClick={() => setSrcImgZoom(fbi)}>
                                    <FaSearch />
                                </div>
                                <a href="https://apifbi.netlify.app/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={promtel} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>PROMTEL SRL</h1>
                            <h6 style={{ color: "#797979" }}>React - Redux</h6>
                            <p>Aplicación web para la empresa Promtel SRL.
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={() => setSrcImgZoom(promtel)}>
                                    <FaSearch />
                                </div>
                                <a href="https://promtelsrl.com/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={bestcard} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>BESTCARD</h1>
                            <h6 style={{ color: "#797979" }}>NodeJS - Angular - Ionic </h6>
                            <p>Biletera virtual
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={() => setSrcImgZoom(bestcard)}>
                                    <FaSearch />
                                </div>
                                <a href="https://www.bestcard.com.ar/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={somos_juventudes} alt="fbi" />
                        <div className={styles.container_info}>
                            <h1>SOMOS JUVENTUDES</h1>
                            <h6 style={{ color: "#797979" }}>NodeJS</h6>
                            <p>Es un estacio intitucional, dependiente del Ministerio de Desarrollo Humano y Promoción Social del Gobierno de San Juan, que promueve actuaciones en beneficio de las juventudes.
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={() => setSrcImgZoom(somos_juventudes)}>
                                    <FaSearch />
                                </div>
                                <a href="https://www.somosjuventudes.com.ar/juventudes/index" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={accessgo} alt="accessgo" />
                        <div className={styles.container_info}>
                            <h1>ACCESSGO</h1>
                            <h6 style={{ color: "#797979" }}>NodeJs</h6>
                            <p>Aplicacion web para la venta de tickets Para eventos.
                            </p>
                            <div className={styles.container_icons}>
                                <div className={styles.icon} onClick={() => setSrcImgZoom(accessgo)}>
                                    <FaSearch />
                                </div>
                                <a href="https://www.accessgo.com.ar/" target="_blank">
                                    <div className={styles.icon}>
                                        <FaLink />
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