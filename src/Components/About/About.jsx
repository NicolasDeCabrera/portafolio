import styles from "./about.module.css"
import { FaHtml5} from "react-icons/fa";
import { useState } from "react";
import perfil from "../../img/perfil.jpg"

function About(){
    const [title, setTitle]=useState("ACERCA DE MI")
    const [menu, setMenu]=useState({
        about:true,
        whyMe:false,
        vision:false
    })

    function handleMenu(element){
        if(element==="about")setTitle("ACERCA DE MI")
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
            <div className={styles.container_bio}>
                <div className={styles.nav}>
                    <div className={styles.container_title}>
                        <h2 className={styles.title}>{title}</h2>
                    </div>
                    <div className={styles.container_buttons}>
                        <div onClick={()=>handleMenu("about")} className={styles.button}>
                            <FaHtml5></FaHtml5>
                            <h4>Acerca de mi</h4>
                        </div>
                        <div onClick={()=>handleMenu("whyMe")} className={styles.button}>
                            <FaHtml5></FaHtml5>
                            <h4>Por qué yo?</h4>
                        </div>
                        <div onClick={()=>handleMenu("vision")} className={styles.button}>
                            <FaHtml5></FaHtml5>
                            <h4>Mi Visión</h4>
                        </div>
                    </div>
                </div>
                {
                    menu.about?
                    <div className={styles.container_about}>
                        <img src={perfil} className={styles.photo}></img>
                        <div className={styles.container_info_about}>
                            <p>Soy Desarrollador Full Stack con la capacidad de realizar proyectos 
                                escalables y modernos, usando tecnologías adecuadas para cada caso 
                                y metodologías ágiles (SCRUM) para un mejor trabajo en equipo.
                            </p>
                            <p>
                                Hace mas de 3 años trabajo en tecnología mas orientada a hardware e informática, redes, enlaces inalámbricos, IOT (Internet de las cosas), domótica. También tengo algo de experiencia en Software para Microcontroladores ya que programé algunos prototipos de productos en: Arduino, Attiny85, ESP8266 y ESP32.
                            </p>
                            <p>
                                Las primeras líneas de código que escribí fue en c++ para programar el microcontrolador Arduino y desde ahí quedé enamorado de la programación. Estuve muchos meses aprendiendo HTML, CSS, JavaScript y PHP de manera autodidacta y sentía que tenia que trabajar de esto. Así fue como busque un lugar para estudiar desde cero y llegue a Soy Henry que me abrió la mente y me enseño que los limites te los pones vos, ya que pude aprender muchas cosas en un tiempo muy corto y la verdad me impresiono mucho del avance que tuve.
                            </p>
                            <p>
                                Actualmente me encuentro graduado de la carrera de Full Stack Developer de Soy Henry y Cursando una Tecnicatura Superior en Desarrollo de Software en un instituto de mi ciudad.
                            </p>
                        </div>
                    </div>
                    :
                    menu.whyMe?
                <div className={styles.container_Why_me}>
                    <div className={styles.container_info_Why_me}>
                        <h4>"MIENTRAS MÁS ME DESAFIE UN PROBLEMA MEJOR"</h4>
                        <p>Me gustan los desafíos, trabajando como Técnico electrónico he 
                            aprendido a resolver problemas, aún cuando parecían no tener solución. Pienso y afirmo
                            que todo tiene solución y por mas que algo parezca no tenerlo, aún así, la tiene. Creo 
                            que esa fortaleza me a ayudado a encontrar las soluciones a muchos problemas tanto en el código como en la vida misma.
                        </p>
                        <h4>"RECONOCER QUE ESTAMOS EQUIVOCADOS AYUDA A CRECER"</h4>
                        <p>
                             Acepto criticas constructivas ya que creo que para ser mejor no solo hay que aprender más, sino también saber escuchar una critica e identificar y aceptar cuando estamos equivocados.
                        </p>
                        <h4>"SENTIR AMOR POR LO QUE HACEMOS"</h4>
                        <p>
                             Pienso que debemos sentir pasion por lo que hacemos haciendo las cosas de la mejor manera posible, dando todo lo que somos y sabemos para llegar a un producto de calidad y exelencia. Pienso que debemos senti amor por lo que hacemos.
                        </p>
                        <h4>"ENSEÑAR A LOS DEMAS, REFUERZA CONOCIMIENTO"</h4>
                        <p>
                             Soy una persona que no le molesta enseñar a los demas. Me gusta compartir el conocimiento, ya que creo que estamos para ayudar a los demas.
                        </p>
                    </div>
                </div>
                :
                menu.vision&&
                <div className={styles.container_vision}>
                    <div className={styles.container_info_vision}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            cumque minus magni eius! Doloribus optio nostrum veritatis 
                            est adipisci quis quidem ab, cum dolorem. Dolor cum expedita ipsa!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            cumque minus magni eius! Doloribus optio nostrum veritatis 
                            est adipisci quis quidem ab, cum dolorem. Dolor cum expedita ipsa!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            cumque minus magni eius! Doloribus optio nostrum veritatis Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            rem. Dolor cum expedita ipsa!
                            est adipisci quis quidem ab, cum dolorem. Dolor cum expedita ipsa!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            cumque minus magni eius! Doloribus optio nostrum veritatis 
                            est adipisci quis quidem ab, cum dolorem. Dolor cum expedita ipsa!
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat illum dignissimos 
                            cumque minus magni eius! Doloribus optio nostrum veritatis 
                            est adipisci quis quidem ab, cum dolorem. Dolor cum expedita ipsa!
                        </p>
                    </div>
                </div>
                }

            </div>
        </div>
    )
}
export default About;