import Button from "./Button_Nav/Button";
import styles from "./nav.module.css"
import { FaHome,FaUserAlt, FaRocket,FaBriefcase,FaHistory,FaAddressBook,
FaLinkedin,FaGithub } from "react-icons/fa";
import { FiAtSign } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMenuPage } from "../../redux/actions/actions";

function Nav(){
    const dispatch= useDispatch()
    const [menuContact, setMenuContact]=useState(false)
    const [navWithScroll, setNavWithScroll] = useState()
    const menuPage = useSelector(state=>state.menuPage)
    
    useEffect(()=>{
        console.log(menuPage)
    },[menuPage])
    
    window.addEventListener("scroll",()=>{
        if(window.scrollY  > 0 && window.scrollY < 20)setNavWithScroll(true);
        if (window.scrollY === 0)setNavWithScroll(false); 
    })
    
    function handleMenuContact(){
        setMenuContact(!menuContact)
        dispatch(setMenuPage("menuContact","algo"))
    }
    
    if(!menuPage.home){
        return (
            <div className={styles.container_scroll}>
                <div className={styles.center}>
                <div className={styles.logo_scroll}>
                    <div className={styles.circle}></div>
                    <h2>Nicolas De Cabrera</h2>
                </div>
                <div className={styles.container_buttons}>
                    <Button href={"#home"} id={"home"}  name={"HOMEPAGE"}  icon={<FaHome s={{color: "#36bfc4"}}></FaHome>} active={menuPage.home}></Button>
                    <Button href={"#about"} id={"about"}  name={"ABOUT"} icon={<FaUserAlt></FaUserAlt>} active={menuPage.about}></Button>
                    <Button href={"#skill"} id={"skill"}  name={"MI SKILL"} icon={<FaRocket></FaRocket>} active={menuPage.skill}></Button>
                    <Button href={"#portfolio"} id={"portfolio"}  name={"PORTFOLIO"} icon={<FaBriefcase></FaBriefcase>} active={menuPage.portfolio}></Button>
                    <Button href={"#timeline"} id={"timeline"}  name={"TIMELINE"}  icon={<FaHistory></FaHistory>} active={menuPage.timeline}></Button>
                    <Button href={"#contact"} id={"contact"}  name={"CONTACT"} icon={<FaAddressBook></FaAddressBook>} active={menuPage.contact}></Button>
                    <div className={styles.plus} onClick={handleMenuContact}>+</div>
                        <div className={`${styles.menu_contact} ${menuPage.menuContact&&styles.active}`}>
                            <a href="mailto:alfredonicolasdecabrera@gmail.com" target="_blank" rel="noopener noreferrer"><FiAtSign className={styles.icon}></FiAtSign></a>
                            <a href="https://www.linkedin.com/in/alfredo-nicolas-de-cabrera/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon}></FaLinkedin></a>
                            <a href="https://github.com/NicolasDeCabrera" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon}></FaGithub></a>
                        </div>
                </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className={styles.container}>
                <div className={styles.center}>
                <div className={styles.logo}>
                    <div className={styles.circle}></div>
                    <h2>Nicolas De Cabrera</h2>
                </div>
                <div className={styles.container_buttons}>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#home"} id={"home"} name={"HOMEPAGE"} icon={<FaHome style={{color:"#fff"}}></FaHome>}active={menuPage.home}></Button>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#about"} id={"about"} name={"ABOUT"} icon={<FaUserAlt style={{color:"#fff"}}></FaUserAlt>}active={menuPage.about}></Button>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#skill"} id={"skill"} name={"MI SKILL"} icon={<FaRocket style={{color:"#fff"}}></FaRocket>}active={menuPage.skill}></Button>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#portfolio"} id={"portfolio"} name={"PORTFOLIO"} icon={<FaBriefcase style={{color:"#fff"}}></FaBriefcase>}active={menuPage.portfolio}></Button>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#timeline"} id={"timeline"} name={"TIMELINE"} icon={<FaHistory style={{color:"#fff"}}></FaHistory>}active={menuPage.timeline}></Button>
                    <Button s={{color:"#fff"}} className={styles.button} href={"#contact"} id={"contact"} name={"CONTACT"} icon={<FaAddressBook style={{color:"#fff"}}></FaAddressBook>}active={menuPage.contact}></Button>
                    <div className={styles.plus} onClick={handleMenuContact}>+</div>
                        <div className={`${styles.menu_contact} ${menuPage.menuContact&&styles.active}`}>
                        <a href="mailto:alfredonicolasdecabrera@gmail.com" target="_blank" rel="noopener noreferrer"><FiAtSign className={styles.icon}></FiAtSign></a>
                            <a href="https://www.linkedin.com/in/alfredo-nicolas-de-cabrera/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.icon}></FaLinkedin></a>
                            <a href="https://github.com/NicolasDeCabrera" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.icon}></FaGithub></a>
                        </div>
                        
                </div>

                </div>
            </div>
        )
    }
}
export default Nav;