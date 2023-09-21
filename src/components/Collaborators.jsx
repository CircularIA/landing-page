import styles from '../style';
import { collab1, collab2, collab3, collab4 } from '../assets';

const linea = {
  width: '80%',
  height: '0.09rem',
  backgroundColor: '#00945E',
  margin: '0 auto',
  marginTop: '1rem',
}

const Collaborators = () => (
  <div id="colaboradores" className={styles.aboutSection}>
    <div className="text-roboto">
      <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>Colaboradores</h1>
    </div>
    <div className='mb-10' style={linea}></div>
    <div className='collaborators-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
      <div className='flex items-center justify-center'>
        <img src={collab1} alt="Collaborator 1" className="collaborators-image" />
      </div>
      <div className='flex items-center justify-center'>
        <img src={collab2} alt="Collaborator 2" className="collaborators-image" />
      </div>
      <div className='flex items-center justify-center'>
        <img src={collab3} alt="Collaborator 3" className="collaborators-image" />
      </div>
      <div className='flex items-center justify-center'>
        <img src={collab4} alt="Collaborator 4" className="collaborators-image" />
      </div>

    </div>
  </div>
)

export default Collaborators
