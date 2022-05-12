import styles from "./about.module.css"
import { FaUserAlt,FaRegEye,FaQuestion} from "react-icons/fa";
import { useState } from "react";
import perfil from "../../img/perfil.jpeg"
import perfil2 from "../../img/perfil.jpg"
import { useSelector } from "react-redux";

function About(){
    const menuPage = useSelector(state=>state.menuPage)
    const [title, setTitle]=useState("ACERCA DE MI")
    const [menu, setMenu]=useState({
        about:true,
        whyMe:false,
        vision:false
    })

    function handleMenu(element){
        if(element==="about")setTitle("ACERCA DE MÍ")
        if(element==="whyMe")setTitle("POR QUÉ YO?")
        if(element==="vision")setTitle("MI VISIÓN")
        setMenu(()=>{
            return{
                about:false,
                whyMe:false,
                vision:false,
                [element]:true,
            }
        })
    }
    return (
        <div id="about" className={styles.body_about}>
             <div className={styles.container_title_info}>
                    <h2>{title}</h2>
                <div className={`${styles.nav} `/*${menuPage.about && styles.fixed_mobile}*/}>
                    <div className={styles.container_buttons}>
                        <div onClick={()=>handleMenu("about")} className={`${styles.button} ${menu.about&&styles.active}`}>
                            <FaUserAlt/>
                            <h4>Acerca de mi</h4>
                        </div>
                        <div onClick={()=>handleMenu("whyMe")} className={`${styles.button} ${menu.whyMe&&styles.active}`}>
                            <FaQuestion/>
                            <h4>Por qué yo?</h4>
                        </div>
                        <div onClick={()=>handleMenu("vision")} className={`${styles.button} ${menu.vision&&styles.active}`}>
                            <FaRegEye/>
                            <h4>Mi Visión</h4>
                        </div>
                    </div>
                </div>
                    
                </div>
            <div className={styles.container_bio}>
                {
                    menu.about?
                    <div className={styles.container_about}>
                        <img src={perfil2} className={styles.photo}></img>
                        <div className={styles.container_info_about}>
                            <p>Soy <b>Desarrollador Full Stack</b> con la capacidad de realizar proyectos 
                                escalables y modernos, usando tecnologías adecuadas para cada caso 
                                y metodologías ágiles (SCRUM) para un mejor trabajo en equipo.
                            </p>
                            <br/>
                            <p>
                                Hace más de 3 años trabajo en tecnología más orientada a hardware e informática, redes, enlaces inalámbricos, IOT (Internet de las cosas), domótica. También escribí código para Microcontroladores ya que programé algunos prototipos de productos en: Arduino, Attiny85, ESP8266 y ESP32.
                            </p>
                            <br/>
                            <p>
                                Las primeras líneas de código que escribí fue en C++ para programar el microcontrolador Arduino y desde ahí quedé enamorado de la programación. Estuve muchos meses aprendiendo <b>HTML, CSS</b>,<b> JavaScript</b> y <b>PHP</b> de manera <b>autodidacta</b> y sentía que tenía que trabajar de esto. Así fue como busque un lugar para estudiar desde cero y llegue a Soy Henry que me abrió la mente y me enseño que <b>"los limites te los pones vos"</b>, ya que pude aprender muchas cosas en un tiempo muy corto y la verdad me impresiono mucho del avance que tuve.
                            </p>
                            <br/>
                            <p>
                                <b>Actualmente me encuentro graduado de la carrera de Full Stack Developer de Soy Henry y Cursando una Tecnicatura Superior en Desarrollo de Software en un instituto de mi ciudad.</b>
                            </p>

                        </div>
                    </div>
                    :
                    menu.whyMe?
                    <div className={styles.container_about}>
                        <img src={perfil2} className={styles.photo}></img>
                        <div className={styles.container_info_about}>
                        <h4>"MIENTRAS MÁS ME DESAFIE UN PROBLEMA MEJOR"</h4>
                      <p>Me gustan los desafíos, trabajando como Técnico electrónico he 
                          aprendido a resolver problemas, aun cuando parecían no tener solución. Pienso y afirmo
                          que todo tiene solución y por más que algo parezca no tenerlo, aun así, la tiene. Creo 
                          que esa fortaleza me ha ayudado a encontrar las soluciones a muchos problemas tanto en el código como en la vida misma.
                      </p>
                      <br/>
                      <h4>"RECONOCER QUE ESTAMOS EQUIVOCADOS AYUDA A CRECER"</h4>
                      <p>
                           Acepto críticas constructivas ya que creo que para ser mejor no solo hay que aprender más, sino también saber escuchar una crítica e identificar y aceptar cuando estamos equivocados.
                      </p>
                      <br/>
                      <h4>"SENTIR AMOR POR LO QUE HACEMOS"</h4>
                      <p>
                           Pienso que debemos sentir pasión por lo que hacemos haciendo las cosas de la mejor manera posible, dando todo lo que somos y sabemos para llegar a un producto de calidad y excelencia. Pienso que debemos sentir amor por lo que hacemos.
                      </p>
                      <br/>
                      <h4>"ENSEÑAR A LOS DEMAS, REFUERZA CONOCIMIENTO"</h4>
                      <p>
                           Soy una persona que no le molesta enseñar a los demás. Me gusta compartir el conocimiento, ya que creo que estamos para ayudar a los demás.
                      </p>

                        </div>
                    </div>
                :
                menu.vision&&
                <div className={styles.container_about}>
                <img src={perfil2} className={styles.photo}></img>
                <div className={styles.container_info_about}>
                <h4>DEDICARME A LA PROGRAMACIÓN</h4>
                    <p>
                        Mi objetivo profesional es desarrollarme dentro del campo IT con perspectivas a largo plazo en el ámbito de la programación.
                    </p> 
                    <br/>
                    <h4>COMUNICAR DE FORMA EFECTIVA</h4>
                    <p>
                        Aplicar mi conocimiento y aptitudes comunicativas para mejorar las experiencias de los clientes de forma integral, así también la capacidad de contribuir con mis competencias, habilidades y destrezas a las expectativas profesionales integrándome al trabajo en equipo.
                    </p>
                    <br/>
                    <h4>DESARROLLAR SOFTWARE DE CALIDAD</h4>
                    <p>
                        Desarrollar con buenas prácticas un software escalable, de calidad y con las tecnologías adecuadas. Por eso sigo en el proceso continuo del aprendizaje.
                    </p>
                    <br/>
                    <h4>SER UN MEJOR PROFESIONAL</h4>
                    <p>
                        El mundo de la tecnología se renueva constantemente es por eso que requiere un aprendizaje continuo y para estar actualizados se necesita mucha dedicación, esfuerzo y pasión. Considero que cuento con todo eso y además soy una persona activa, apasionada, autodidacta y autocritica la cual busca estar creciendo contantemente. Es por eso que es solo cuestión de tiempo y mucho esfuerzo para alcanzar todo lo que me propongo.  
                    </p>

                </div>
            </div>
                }

            </div>
        </div>
    )
}
export default About;