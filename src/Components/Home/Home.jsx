import About from "../About/About";
import Nav from "../Nav/Nav";
import styles from "./home.module.css"
import Typewriter from "typewriter-effect"; 
import Skill from "../Skill/Skill";
import Timeline from "../Timeline/Timeline";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {setMenuPage} from "../../redux/actions/actions"
import Galery from "../Galery/Galery";

function Home(){
    const dispatch=useDispatch()
    const imgZoom = useSelector(state=>state.imgZoom)
    function handleScroll(){
        if((document.querySelector("#home").getBoundingClientRect().top)<=40 && (document.querySelector("#home").getBoundingClientRect().top)>=0)dispatch(setMenuPage("home"))
        if((document.querySelector("#about").getBoundingClientRect().top)<=600 && (document.querySelector("#about").getBoundingClientRect().top)>=0)dispatch(setMenuPage("about"))
        if((document.querySelector("#skill").getBoundingClientRect().top)<=400 && (document.querySelector("#skill").getBoundingClientRect().top)>=0)dispatch(setMenuPage("skill"))
        if((document.querySelector("#portfolio").getBoundingClientRect().top)<=400 && (document.querySelector("#portfolio").getBoundingClientRect().top)>=0)dispatch(setMenuPage("portfolio"))
        if((document.querySelector("#timeline").getBoundingClientRect().top)<=400 && (document.querySelector("#timeline").getBoundingClientRect().top)>=0)dispatch(setMenuPage("timeline"))
        if((document.querySelector("#contact").getBoundingClientRect().top)<=400 && (document.querySelector("#contact").getBoundingClientRect().top)>=0)dispatch(setMenuPage("contact"))
    } 
    return (
        <>
        {imgZoom && <Galery src={imgZoom}></Galery>}
        <Nav></Nav>
       <div onScroll={handleScroll}className={styles.body}>
        <div id="home" className={styles.container_home}>
            <div className={styles.container_name}>
                <h1>Nicolás De Cabrera</h1>
                <p>a proffesional 
                   { <Typewriter
                     options={{
                        strings: ['FULL STACK DEVELOPER', 'DESARROLLADOR DE SOFTWARE'],
                        autoStart: true,
                        loop: true,
                        delay: 5,
                      }}
                    />}
                </p> 
            </div>
        </div>
        <About></About>
        <Skill></Skill>
        <Portfolio></Portfolio>
        <Timeline></Timeline>
        <Contact></Contact>
        <Footer></Footer>
        </div>
        </>
    )
}
export default Home;