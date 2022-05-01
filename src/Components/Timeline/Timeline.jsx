import styles from "./timeline.module.css"
function Timeline(){
    return (
        <div id="timeline" className={styles.container_timeline}>
           <div className={styles.container_center}>
               <div className={styles.timeline}></div>
            <div className={styles.title}>
                <h2>TRABAJO Y EDUCACIÓN</h2>
                <p>Estos son algunos de mis últimos avances tanto en lo laboral como en la parte educativa.
                </p>
            </div>
            <div className={styles.segment_left}>
                <div className={styles.card}>
                    <h3>TEC. SUP. EN DESARROLLO DE SOFTWARE</h3>
                    <p>Comencé a estudiar en el instituto ISRI (Instituto Superior de Redes & Informática) la carrera técnica superior en desarrollo de software.
                    </p>
                </div>
                <div className={styles.time_left}>2022</div>
                <div className={styles.cicuenta_left}></div>
            </div>
            <div className={styles.segment_right}>
            <div className={styles.cicuenta_right}></div>
                <div className={styles.time_right}>2021</div>
                <div className={styles.card}>
                    <h3>SOY HENRY</h3>
                    <p>Comencé a estudiar en SOY HENRY la carrera de Full Stack Developer. Actualmente ya estoy graduado y muy agradecido por esa maravillosa experiencia de trabajar en equipo y codear más de 800hs a lo largo del bootcamp.
                    </p>
                </div>
            </div>
            <div className={styles.segment_left}>
                <div className={styles.card}>
                    <h3>WESCOM S.R.L</h3>
                    <p>Empecé a trabajar en Wescom srl. Empresa de tecnología dedicada al desarrollo de productos de domotica (<a target="_blank" rel="noopener noreferrer" href="https://www.reactor.com.ar/">REACTOR</a>) y seguridad (<a target="_blank" rel="noopener noreferrer" href="https://www.vigicom.net.ar/">VIGICOM</a> y <a target="_blank" rel="noopener noreferrer" href="https://www.vigitec.net/">VIGITEC</a>). Mi responsabilidad consistía en desarrollar el hardware, ensamble y reparación de los productos. 
                    </p>
                </div>
                <div className={styles.time_left}>2020</div>
                <div className={styles.cicuenta_left}></div>
            </div>
            <div className={styles.segment_right}>
            <div className={styles.cicuenta_right}></div>
                <div className={styles.time_right}>2018</div>
                <div className={styles.card}>
                    <h3>PROMTEL S.R.L</h3>
                    <p>Empecé a trabajar en Promtel srl. Empresa de servicios dedicada a soluciones tecnológicas a empresas (Cámaras de seguridad, Redes de fibra óptica, redes de cobre, enlaces inalámbricos, etc.) y a la distribución de internet para empresas y hogares.
                    </p>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Timeline;