import styles from '../style';
import {linkedin, mail, whatsapp} from '../assets';

const linea = {
  width: '80%',
  height: '0.09rem',
  backgroundColor: '#1E1E1E',
  margin: '0 auto',
  marginTop: '1rem',
}

const ContactUs = () => (
  <div id="about-us" className={styles.aboutSection}>
    <div className='mb-10' style={linea}></div>
    <div className="text-roboto">
      <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>CONTÁCTANOS</h1>
    </div>
    <div className='contactus-container'>
      <img src={linkedin} alt="Collaborator 1" className="collaborators-image" />
      <img src={mail} alt="Collaborator 2" className="collaborators-image" />
      <img src={whatsapp} alt="Collaborator 3" className="collaborators-image" />
    </div>
    <div className='text-roboto text-center mt-7'>© 2023</div>
    <div className='text-roboto text-center mt-7'>Privacy Terms</div>
  </div>
)


export default ContactUs