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

                    <div className={styles.segment_right}>
                    <div className={styles.cicuenta_right}></div>
                    <div className={styles.time_right}>2023</div>
                    <div className={styles.card}>
                        <h3><a target="_blank" rel="noopener noreferrer" href="https://aenima.agency/">AENIMA AGENCY</a></h3>
                        <p>Comencé a trabajar como Frontend Developer en Aenima Agency, una compañía digital que se especializa en ayudar a las organizaciones a potenciar sus estrategias mediante innovación, diseño, creatividad y tecnología.
                        </p>
                    </div>
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
                        <h3><a target="_blank" rel="noopener noreferrer" href="https://www.opentags.com.ar/es/">OPENTAGS</a></h3>
                        <p>Comencé a trabajar en Opentags, una empresa de desarrollo de software ubicada en San Juan, como Full Stack Developer. Participé en el desarrollo de varios proyectos para el gobierno provincial, así como en el mantenimiento de <a target="_blank" rel="noopener noreferrer" href="https://bestcard.com.ar/">BestCard</a>, una billetera virtual.
                        </p>
                    </div>
                </div>
                <div className={styles.segment_left}>
                    <div className={styles.card}>
                        <h3><a target="_blank" rel="noopener noreferrer" href="https://www.wescom.net.ar/">WESCOM S.R.L</a></h3>
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
                        <h3><a target="_blank" rel="noopener noreferrer" href="https://promtelsrl.com/">PROMTEL S.R.L</a></h3>
                        <p>Empecé a trabajar en Promtel srl. Empresa de servicios dedicada a soluciones tecnológicas a empresas (Cámaras de seguridad, Redes de fibra óptica, redes de cobre, enlaces inalámbricos, etc.) y a la distribución de internet para empresas y hogares.
                        </p>
                    </div>
                </div>
           </div>
        </div>
    )
}
export default Timeline;