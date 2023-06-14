import styles from "./style"
import {Navbar} from './components';

const App = () => (
  <div className='bg-navbar-gradient w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`} >
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
  </div>
)

export default App