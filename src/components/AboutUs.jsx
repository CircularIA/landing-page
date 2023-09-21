import { icon1 } from '../assets';
import styles from '../style';
import { Carousel } from "@material-tailwind/react";
import AnimatedOnScroll from './AnimatedOnScroll';

const linea = {
  width: '80%',
  height: '0.09rem',
  backgroundColor: '#00945E',
  margin: '0 auto',
  marginTop: '1rem',
}

const AboutUs = () => {
  const images = [
    'https://images.unsplash.com/photo-1604758571514-49b1ac668d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1574974671999-24b7dfbb0d53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  ];

  return (
    <div id="mision-vision" className={styles.aboutSection}>
      <AnimatedOnScroll animationClass="animate__fadeInLeft">
        <img src={icon1} alt="icon1" className={styles.aboutImage} />
        <div className="text-roboto">
          <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>Misión Visión</h1>
        </div>
        <div className={`${styles.flexCenter} w-4/5 lg:w-2/5 mx-auto`}>
          <p className={`${styles.aboutText} text-black font-normal mt-10 mb-5 text-lg`}>Transformando la sostenibilidad empresarial a través de la innovación y la tecnología.</p>
        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationClass="animate__fadeInLeft">
        <div id="funciones" className="text-roboto">
          <h1 className={`${styles.aboutText} text-3xl text-black font-bold mt-10`}>Nuestras funciones</h1>
        </div>
        <div style={linea}></div>
        <div className="carrusel">
          <div className="contenedor-imagenes">
            <Carousel className="rounded-xl">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </AnimatedOnScroll>
    </div>
  );
};

export default AboutUs;
