import styles from "./style"
import { Navbar } from './components';
import { Hero } from './components';
import { AboutUs } from './components';
import { Collaborators } from './components';
import { Team } from './components';
import { ContactUs } from './components';
import { messageIcon } from './assets';
import { useState } from 'react';
import { Modal } from './components';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIconClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='bg-navbar-gradient w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`} >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
          <AboutUs />
          <Collaborators />
          <Team />
          <ContactUs />
        </div>
      </div>
      <div className="fixed right-0 transform -translate-y-1/2 cursor-pointer" style={{ top: '45%' }} onClick={handleIconClick}>
        <img src={messageIcon} alt="Mensaje" width="55" height="55" />
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  )

}

export default App