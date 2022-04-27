import styles from "./timeline.module.css"
function Timeline(){
    return (
        <div id="timeline" className={styles.container_timeline}>
           <div className={styles.container_center}>
               <div className={styles.timeline}></div>
            <div className={styles.title}>
                <h2>TRABAJO Y EDUCACIÓN</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus placeat necessitatibus 
                    vero optio, dolores assumenda tempora earum repudiandae quod maxime enim accusamus architecto
                     omnis ab id possimus ad sunt.
                </p>
            </div>
            <div className={styles.segment_left}>
                <div className={styles.card}>
                    <h3>HIGH SCHOOL DEGREE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed neque magni 
                        reiciendis corrupti deleniti, maxime nisi obcaecati laboriosam vel animi 
                        architecto amet earum adipisci. Saepe accusamus 
                        non explicabo laborum?
                    </p>
                </div>
                <div className={styles.time_left}>2020</div>
                <div className={styles.cicuenta_left}></div>
            </div>
            <div className={styles.segment_right}>
            <div className={styles.cicuenta_right}></div>
                <div className={styles.time_right}>2020</div>
                <div className={styles.card}>
                    <h3>HIGH SCHOOL DEGREE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed neque magni 
                        reiciendis corrupti deleniti, maxime nisi obcaecati laboriosam vel animi 
                        architecto amet earum adipisci. Saepe accusamus 
                        non explicabo laborum?
                    </p>
                </div>
            </div>
            <div className={styles.segment_left}>
                <div className={styles.card}>
                    <h3>HIGH SCHOOL DEGREE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed neque magni 
                        reiciendis corrupti deleniti, maxime nisi obcaecati laboriosam vel animi 
                        architecto amet earum adipisci. Saepe accusamus 
                        non explicabo laborum?
                    </p>
                </div>
                <div className={styles.time_left}>2020</div>
                <div className={styles.cicuenta_left}></div>
            </div>
            <div className={styles.segment_right}>
            <div className={styles.cicuenta_right}></div>
                <div className={styles.time_right}>2020</div>
                <div className={styles.card}>
                    <h3>HIGH SCHOOL DEGREE</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sed neque magni 
                        reiciendis corrupti deleniti, maxime nisi obcaecati laboriosam vel animi 
                        architecto amet earum adipisci. Saepe accusamus 
                        non explicabo laborum?
                    </p>
                </div>
            </div>
           </div>
        </div>
    )
}
export default Timeline;