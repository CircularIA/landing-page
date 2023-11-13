import styles from "./style"
import { Navbar } from './components'
import { Hero } from './components'
import { AboutUs } from './components'
import { Collaborators } from './components'
import { Team } from './components'
import { ContactUs } from './components'
import { messageIcon } from './assets'
import { useState } from 'react'
import { Modal } from './components'
import AnimatedOnScroll from "./components/AnimatedOnScroll"
import { useNavigate } from 'react-router-dom'

const linea = {
  width: '80%',
  height: '0.05rem',
  backgroundColor: '#00945E',
  margin: '0 auto',
  marginTop: '1rem',
}

const MainPage = () => {
  const navigate = useNavigate()
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='bg-navbar-gradient w-[full] overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`w-full 2k:h-[120px] 4k:h-[150px]`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <AnimatedOnScroll animationClass="animate__fadeIn">
            <Hero />
          </AnimatedOnScroll>
          <AboutUs />
          <AnimatedOnScroll animationClass="animate__fadeInLeft">
            <Collaborators />
          </AnimatedOnScroll>
          <AnimatedOnScroll animationClass="animate__fadeInLeft">
            <Team />
          </AnimatedOnScroll>
          <AnimatedOnScroll animationClass="animate__fadeInUp">
            <div>
              <div className="text-roboto">
                <h1 className={`${styles.aboutText} text-3xl 2k:text-5xl 2k:text-6xl text-black font-bold mt-10`}>Ahora es tu turno</h1>
              </div>
              <div style={linea}></div>
              <div className='button-container py-14'>
                <button type="submit" className="questionnaire-button h-[50px] 2k:h-[70px] 4k:h-[100px] text-sm sm:text-xl 2k:text-3xl 4k:text-4xl " onClick={() => navigate("/cuestionario")}>Te invitamos a contestar nuestro cuestionario</button>
              </div>
            </div>
            <ContactUs />
          </AnimatedOnScroll>
        </div>
      </div>
      <div className="fixed right-0 transform -translate-y-1/2 cursor-pointer" style={{ top: '45%' }} onClick={handleIconClick}>
        <img src={messageIcon} alt="Mensaje" width="55" height="55" className="message-img 2k:w-[100px] 2k:h-[100px] 4k:w-[130px] 4k:h-[130px]" />
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )

}

export default MainPage