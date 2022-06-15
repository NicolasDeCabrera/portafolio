import styles from "./skill.module.css"
import { FaHtml5, FaCss3, FaNodeJs,FaNode, FaPhp } from "react-icons/fa";
import { SiJavascript, SiTypescript,SiRedux , SiReact , SiStyledcomponents, SiPostgresql,
    SiSequelize, SiNextdotjs, SiMongodb, SiGithub} from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";

function Skill(){
    return (
        <div id="skill" className={styles.container_skill}>
            <div className={styles.containter_info_cards}>
                <div className={styles.info}>
                    <h2>MI SKILL</h2>
                    <p>Estos son los Lenguajes y tecnologías que estoy manejando actualmente. Próximamente estaré subiendo mas ya que sigo en la labor de crecer como profesional. 
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
                    <SiNextdotjs className={styles.icon}></SiNextdotjs>
                    <h4>NextJS</h4>
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
                    <BsBootstrapFill className={styles.icon}></BsBootstrapFill>
                    <h4>Bootstrap</h4>
                </div>
                <div className={styles.card}>
                    <FaNodeJs className={styles.icon}></FaNodeJs>
                    <h4>NodeJS</h4>
                </div>
                <div className={styles.card}>
                    <FaNode className={styles.icon}></FaNode>
                    <h4>Express</h4>
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
                    <SiMongodb className={styles.icon}></SiMongodb>
                    <h4>MongoDB</h4>
                </div>
                <div className={styles.card}>
                    <img style={{filter: "grayscale(1) invert(100%)"}} src="https://mongoosejs.com/docs/images/mongoose5_62x30_transparent.png" className={styles.icon}></img>
                    <h4>Mongoose</h4>
                </div>
                <div className={styles.card}>
                    <FaPhp className={styles.icon}></FaPhp>
                    <h4>PHP</h4>
                </div>
                <div className={styles.card}>
                    <SiGithub className={styles.icon}></SiGithub>
                    <h4>Github</h4>
                </div>

                
            </div>
            </div>
        </div>
    )
}
export default Skill;