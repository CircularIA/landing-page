import { icon1, icon2 } from '../assets';
import styles from '../style';
import './about-us.css'
import { Carousel, Typography } from "@material-tailwind/react";
import AnimatedOnScroll from './AnimatedOnScroll';
import 'atropos/css';
import Atropos from 'atropos/react';
import funcionalidad2 from '../assets/funcionalidad2.webp'
import funcionalidad4 from '../assets/funcionalidad4.webp'
import funcionalidad5 from '../assets/funcionalidad5.webp'
import funcionalidad6 from '../assets/funcionalidad6.webp'
import funcionalidad7 from '../assets/funcionalidad7.webp'

const linea = {
  width: '80%',
  height: '0.09rem',
  backgroundColor: '#00945E',
  margin: '0 auto',
  marginTop: '1rem',
}


const AboutUs = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1604758571514-49b1ac668d60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Evaluación del Estado Basal',
      description: 'CircularIA realiza un análisis exhaustivo del estado actual de tu empresa en términos de Economía Circular, proporcionando una base sólida para la planificación estratégica.',
    },
    {
      src: funcionalidad2,
      title: 'Generación y Monitoreo de Indicadores',
      description: 'La plataforma genera indicadores de monitoreo personalizados, basados en la evaluación inicial, permitiendo un seguimiento constante y preciso del progreso en Economía Circular.',
    },
    {
      src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Recomendaciones Estratégicas',
      description: 'CircularIA propone acciones concretas y basadas en datos para mejorar los indicadores de Economía Circular, guiando a tu empresa hacia prácticas más sostenibles y eficientes.',
    },
    {
      src: funcionalidad4,
      title: 'Trazabilidad y Cumplimiento Legal',
      description: 'Asegura el cumplimiento de legislaciones relevantes mediante una trazabilidad online meticulosa y accesible.',
    },
    {
      src: funcionalidad5,
      title: 'Visibilidad y Responsabilidad Ambiental',
      description: 'Ofrece una visión clara de las operaciones y gestiones de tu empresa, promoviendo una cultura de responsabilidad ambiental y social.',
    },
    {
      src: funcionalidad6,
      title: 'Cálculo y Comparación de Huella de Carbono',
      description: ' Calcula la huella de carbono de tu empresa y compárala con el promedio de la industria, proporcionando insights valiosos sobre tu posición en el mercado en términos de sostenibilidad.',
    },
    {
      src: funcionalidad7,
      title: 'Inteligencia Artificial para Estrategias Óptimas (Próximamente)',
      description: 'La futura versión de CircularIA incorporará Inteligencia Artificial para generar estrategias de EC óptimas, proporcionando recomendaciones aún más personalizadas y efectivas.',
    }
  ];


  return (
    <div id="mision-vision" className={styles.aboutSection}>
      <AnimatedOnScroll animationClass="animate__fadeInLeft">
        <div className={`flex flex-col md:flex-row justify-between ${styles.yourCustomStyles}`}>

          {/* Misión */}
          <div className={`flex flex-col ${styles.flexItemStyles} md:w-1/2`}>
            <img src={icon1} alt="icon1" className={`${styles.aboutImage} 2k:h-[200px] 4k:h-[300px]`} />
            <div className="text-roboto">
              <h1 className={`${styles.aboutText} text-3xl 2k:text-5xl 2k:text-6xl text-black font-bold mt-10`}>Misión</h1>
            </div>
            <div className={`${styles.flexCenter} w-4/5 mx-auto`}>
              <p className={`${styles.aboutText} text-black font-normal mt-10 mb-5 text-lg 2k:text-2xl 4k:text-3xl`}>
                Empoderar a las empresas en su transición hacia la economía circular, proporcionando una plataforma robusta que genera indicadores y estrategias personalizadas, enfocadas en la sostenibilidad y el avance hacia los Objetivos de Desarrollo Sostenible, mediante la captura y análisis de información relevante en ámbitos ambientales, económicos y sociales.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className={`flex flex-col ${styles.flexItemStyles} md:w-1/2`}>
            <img src={icon2} alt="icon1" className={`${styles.aboutImage} 2k:h-[200px] 4k:h-[300px]`} />
            <div className="text-roboto">
              <h1 className={`${styles.aboutText} text-3xl 2k:text-5xl 2k:text-6xl text-black font-bold mt-10`}>Visión</h1>
            </div>
            <div className={`${styles.flexCenter} w-4/5 mx-auto`}>
              <p className={`${styles.aboutText} text-black font-normal mt-10 mb-5 text-lg 2k:text-2xl 4k:text-3xl`}>
                Ser la herramienta líder y referente en la facilitación y optimización de estrategias de economía circular para empresas a nivel nacional e internacional, integrando tecnologías avanzadas como la inteligencia artificial para propiciar un futuro donde las empresas operen de manera sostenible, responsable y beneficiosa para todos.
              </p>
            </div>
          </div>

        </div>
      </AnimatedOnScroll>
      <AnimatedOnScroll animationClass="animate__fadeInLeft">
        <div id="funciones" className="text-roboto">
          <h1 className={`${styles.aboutText} text-3xl 2k:text-5xl 2k:text-6xl text-black font-bold mt-10`}>Nuestras funciones</h1>
        </div>
        <div style={linea}></div>

        <Atropos className="carrusel mb-10">
          <div className="contenedor-imagenes h-[250px] sm:h-[400px] md:h-[600px] 2k:h-[1000px] 4k:h-[1300px]">
            <Carousel className="rounded-xl">
              {images.map((imageData, index) => (
                <div className="relative h-full w-full" key={index}>
                  <img
                    src={imageData.src}
                    alt={`Imagen ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                      <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-xl sm:text-4xl lg:text-5xl 2k:text-6xl"
                      >
                        {imageData.title}
                      </Typography>
                      <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80 text-xs sm:text-xl 2k:text-3xl"
                      >
                        {imageData.description}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </Atropos>
      </AnimatedOnScroll>
    </div>
  );
};



export default AboutUs;
