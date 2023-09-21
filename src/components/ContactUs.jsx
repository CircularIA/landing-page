import styles from '../style';
import {linkedin, mail, whatsapp} from '../assets';

const linea = {
  width: '80%',
  height: '0.05rem',
  backgroundColor: '#1E1E1E',
  margin: '0 auto',
  marginTop: '1rem',
}

const ContactUs = () => (
  <div id="contactanos" className={styles.aboutSection}>
    <div className='mb-10' style={linea}></div>
    <div className="text-roboto">
      <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>CONTÁCTANOS</h1>
    </div>
    <div className='contactus-container'>
      <a href="https://www.linkedin.com/company/prosperse" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Collaborator 1" className="collaborators-image"  />
      </a>
      <a href="mailto:prosperseia@gmail.com" target="_blank" rel="noreferrer">
        <img src={mail} alt="Collaborator 2" className="collaborators-image" />
      </a>
      <a href="https://wa.me/56957777777" target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="Collaborator 3" className="collaborators-image" />
      </a>
    </div>
    <div className='text-roboto text-center mt-7'>© 2023</div>
    <div className='text-roboto text-center mt-7'>Privacy Terms</div>
  </div>
)


export default ContactUs