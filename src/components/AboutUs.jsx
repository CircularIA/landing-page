import { icon1 } from '../assets';
import styles from '../style';

const AboutUs = () => (
  <div id="about-us" className={styles.aboutSection}>
    <img src={icon1} alt="icon1" className={styles.aboutImage} />
    <div className="text-roboto">
      <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>Misión Visión</h1>
    </div>
    <div className={`${styles.flexCenter} w-4/5 lg:w-2/5 mx-auto`}> {/* Contenedor con el ancho del 50% */}
      <p className={`${styles.aboutText} text-black font-normal mt-10 text-lg`}>Transformando la sostenibilidad empresarial a través de la innovación y la tecnología.</p>
    </div>
  </div>
);

export default AboutUs;
