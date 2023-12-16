import styles from '../style';
import { linkedin, mail, whatsapp } from '../assets';


const ContactUs = () => (
  <div id="contactanos" className='bg-contact-us-gradient p-10'>
    <h1 className={`${styles.aboutText} text-white text-3xl 2k:text-5xl 2k:text-6xl text-black font-[600] pt-5`}>CONTÁCTANOS</h1>
    <div className='contactus-container w-[15%] 2k:w-[30%]'>
      <a href="https://www.linkedin.com/company/prosperse" target="_blank" rel="noreferrer">
        <img src={linkedin} alt="Collaborator 1" className="collaborators-image 2k:w-[60px] 4k:w-[80px]" />
      </a>
      <a href="mailto:prosperseia@gmail.com" target="_blank" rel="noreferrer">
        <img src={mail} alt="Collaborator 2" className="collaborators-image 2k:w-[60px] 4k:w-[80px]" />
      </a>
      <a href={`https://wa.me/${import.meta.env.VITE_ANA_PHONE}`} target="_blank" rel="noreferrer">
        <img src={whatsapp} alt="Collaborator 3" className="collaborators-image 2k:w-[60px] 4k:w-[80px]" />
      </a>
    </div>
    <div className='text-white text-roboto text-center mt-3 2k:text-xl 4k:text-2xl'>Este software está siendo desarrollado por Prosperse Technologies © 2023</div>
    <div className='text-white text-roboto text-center mt-2 2k:text-xl 4k:text-2xl'>Privacy Terms</div>
  </div>
)


export default ContactUs