import styles from "./contact.module.css";
import { FaLinkedin, FaGithub, FaListAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMail } from "../../redux/actions/actions";
import toast, { Toaster } from 'react-hot-toast';

function Contact() {
  const dispatch = useDispatch();
  const isSendMail = useSelector(state=>state.sendMail)
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  function handleInputs(e) {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    toast.promise(
        dispatch(sendMail({fullName:input.fullName, emailForm:input.email,menssage:input.message,emailDest:"alfredonicolasdecabrera@gmail.com", title:"Contacto Porfolio"})),
         {
           loading: 'Enviando Mensaje...',
           success: <b>Mensaje Enviado!</b>,
           error: <b>Mensaje no Enviado.</b>,
         },
         {
            style: {
              marginTop: '80px',
            //   backgroundColor: '#36bfc4c8',
              backgroundColor: '#36bfc4a2',
              backdropFilter: 'blur(2px)',
              webkitBackdropFilter: 'blur(11px)',
              border:'solid 1px #fff',
              color: '#fff'
            },
            success: {
              duration: 5000,
              icon: <MdEmail/>,
            },
          }
       );
       setInput({
        fullName: "",
        email: "",
        message: "",
       });
    
  }
//   useEffect(()=>{
//       if (isSendMail) {
//         toast.success('Mensaje Enviado!')
//       }
//   },[isSendMail])
      return (
        <div id="contact" className={styles.container_contact}>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
          <form
            className={styles.container_center}
          >
            <div className={styles.container_title}>
              <h2>CONTÁCTAME</h2>
              <p>
                Si te interesa mi perfil, mis proyectos o tienes alguna consulta o
                sugerencia contáctate.
              </p>
            </div>
            <div className={styles.container_form}>
              <div className={styles.form}>
                <div className={styles.container_inputs}>
                  <input
                    onChange={handleInputs}
                    value={input.fullName}
                    placeholder="Nombre Completo"
                    type="text"
                    id="fullName"
                    name="fullName"
                  />
                  <input
                    onChange={handleInputs}
                    value={input.email}
                    placeholder="Correo Electronico"
                    id="email"
                    type="email"
                    name="email"
                  />
                </div>
                <textarea
                  onChange={handleInputs}
                  value={input.message}
                  placeholder="Escriba su mensaje aquí..."
                  id="message"
                  name="message"
                ></textarea>
                <div className={styles.container_button}>
                  <button
                    type="submit"
                    className={styles.button}
                    onClick={(e)=>handleSubmit(e)}
                    // disabled={isSendMail}
                  >
                    ENVIAR
                  </button>
                </div>
              </div>
              <div className={styles.info_redes}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/alfredo-nicolas-de-cabrera/"
                  className={styles.contact}
                >
                  <div className={styles.icon}>
                    <FaLinkedin />
                  </div>
                  <div className={styles.container_enlace}>
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/alfredo-nicolas-de-cabrera</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/NicolasDeCabrera"
                  className={styles.contact}
                >
                  <div className={styles.icon}>
                    <FaGithub />
                  </div>
                  <div className={styles.container_enlace}>
                    <h3>Github</h3>
                    <p>github.com/NicolasDeCabrera</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:alfredonicolasdecabrera@gmail.com"
                  className={styles.contact}
                >
                  <div className={styles.icon}>
                    <MdEmail />
                  </div>
                  <div className={styles.container_enlace}>
                    <h3>Email</h3>
                    <p>alfredonicolasdecabrera@gmail.com</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.canva.com/design/DAE77JyYim8/KkY_-51XyTT3RimZoYsc0Q/view?utm_content=DAE77JyYim8&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
                  className={styles.contact}
                >
                  <div className={styles.icon}>
                    <FaListAlt />
                  </div>
                  <div className={styles.container_enlace}>
                    <h3>Currículum Vitae</h3>
                    <p>alfredo_nicolas_de_cabrera</p>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://api.whatsapp.com/send/?phone=%2B542645222502&text&app_absent=0"
                  className={styles.contact}
                >
                  <div className={styles.icon}>
                    <FaWhatsapp />
                  </div>
                  <div className={styles.container_enlace}>
                    <h3>Whatsapp</h3>
                    <p>+54 2645222502</p>
                  </div>
                </a>
              </div>
            </div>
          </form>
        </div>
      );
  }
export default Contact;
