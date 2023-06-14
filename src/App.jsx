import styles from "./style"
import {Navbar} from './components';
import {Hero} from './components';
import {AboutUs} from './components';

const App = () => (
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
      </div>
    </div>
  </div>
)

export default App