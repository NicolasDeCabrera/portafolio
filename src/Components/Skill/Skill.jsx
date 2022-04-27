import styles from "./skill.module.css"
import { FaHtml5, FaCss3, FaNodeJs,FaNode, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTypescript,SiRedux , SiReact , SiStyledcomponents, SiPostgresql,
    SiSequelize} from "react-icons/si";

function Skill(){
    return (
        <div id="skill" className={styles.container_skill}>
            <div className={styles.containter_info_cards}>
                <div className={styles.info}>
                    <h2>MI SKILL</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, illo distinctio. 
                        Vel ea repudiandae laudantium quaerat. Culpa quidem omnis eligendi, deserunt 
                        architecto sequi nesciunt 
                        aliquid voluptatem. Fuga harum ab at?
                    </p>
                </div>
            <div className={styles.container_cards}>
                <div className={styles.card}>
                    <FaHtml5 className={styles.icon}></FaHtml5>
                    <h4>HTML5</h4>
                </div>
                <div className={styles.card}>
                    <FaCss3 className={styles.icon}></FaCss3>
                    <h4>CSS3</h4>
                </div>
                <div className={styles.card}>
                    <SiJavascript className={styles.icon}></SiJavascript>
                    <h4>JavaScript</h4>
                </div>
                <div className={styles.card}>
                    <SiReact className={styles.icon}></SiReact>
                    <h4>React</h4>
                </div>
                <div className={styles.card}>
                    <SiTypescript className={styles.icon}></SiTypescript>
                    <h4>TypeScript</h4>
                </div>
                <div className={styles.card}>
                    <SiRedux className={styles.icon}></SiRedux>
                    <h4>Redux</h4>
                </div>
                <div className={styles.card}>
                    <SiStyledcomponents className={styles.icon}></SiStyledcomponents>
                    <h4>Styled Components</h4>
                </div>
                <div className={styles.card}>
                    <FaNodeJs className={styles.icon}></FaNodeJs>
                    <h4>NodeJS</h4>
                </div>
                <div className={styles.card}>
                    <SiPostgresql className={styles.icon}></SiPostgresql>
                    <h4>PostgresSQL</h4>
                </div>
                <div className={styles.card}>
                    <SiSequelize className={styles.icon}></SiSequelize>
                    <h4>Sequelize</h4>
                </div>
                <div className={styles.card}>
                    <FaNode className={styles.icon}></FaNode>
                    <h4>Express</h4>
                </div>
                <div className={styles.card}>
                    <FaPhp className={styles.icon}></FaPhp>
                    <h4>PHP</h4>
                </div>

                
            </div>
            </div>
        </div>
    )
}
export default Skill;