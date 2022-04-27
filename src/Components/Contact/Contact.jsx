import styles from "./contact.module.css"
import { FaLinkedin,FaGithub, FaListAlt,FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import fondo from "../../img/contact.jpg"


function Contact(){
    return (
       <div id="contact" className={styles.container_contact}>
           {/* <img src={fondo} alt="" /> */}
           <div className={styles.container_center}>
               <div className={styles.container_title}>
                   <h2>CONTÁCTAME</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, earum aliquid. Iure ratione beatae nam sequi accusamus libero maxime non ut</p>
               </div>
               <div className={styles.container_form}>
                   <div className={styles.form}>
                       <div className={styles.container_inputs}>
                            <input placeholder="Nombre Completo" type="text" />
                            <input placeholder="Correo Electronico" type="email" />
                       </div>
                       <textarea placeholder="Escriba su mensaje aqui..."></textarea>
                        <div className={styles.container_button}>
                            <button className={styles.button}>ENVIAR</button>
                        </div>
                   </div>
                   <div className={styles.info_redes}>
                       <Link blank={true} to="\www.linkedin.com/in/alfredo-nicolas-de-cabrera" className={styles.contact}>
                           <div className={styles.icon}>
                                <FaLinkedin/>
                           </div>
                                <div className={styles.container_enlace}>
                                    <h3>LinkedIn</h3>
                                    <p>linkedin.com/in/alfredo-nicolas-de-cabrera</p>
                                </div>
                       </Link>
                       <Link to="\github.com/NicolasDeCabrera"  className={styles.contact}>
                           <div className={styles.icon}>
                                <FaGithub/>
                           </div>
                               <div className={styles.container_enlace}>
                                    <h3>Github</h3>
                                    <p>github.com/NicolasDeCabrera</p>
                               </div>

                       </Link>
                       <Link to="\alfredonicolasdecabrera@gmail.com" className={styles.contact}>
                           <div className={styles.icon}>
                                <MdEmail/>
                           </div>
                                <div className={styles.container_enlace}>
                                    <h3>Email</h3>
                                    <p>alfredonicolasdecabrera@gmail.com</p>
                               </div>

                       </Link>
                       <Link to="\www.canva.com/design/DAE77JyYim8/KkY_-51XyTT3RimZoYsc0Q/view?utm_content=DAE77JyYim8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview" className={styles.contact}>
                           <div className={styles.icon}>
                                <FaListAlt/>
                           </div>
                                <div className={styles.container_enlace}>
                                    <h3>Currículum Vitae</h3>
                                    <p>canva_nicolasdecabrera</p>
                            </div>
                       </Link>
                       <Link to="\wa.me/+542645222502" className={styles.contact}>
                           <div className={styles.icon}>
                                <FaWhatsapp/>
                           </div>
                           <div className={styles.container_enlace}>
                                <h3>Whatsapp</h3>
                                <p>+54 2645222502</p>
                            </div>
                       </Link>
                   </div>
               </div>
           </div>
        </div>
    )
}
export default Contact;