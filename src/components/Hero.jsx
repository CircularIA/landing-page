import {rectangle1 } from "../assets"

const Hero = () => (
  <section id="home" className="relative">
    <div className="relative w-full h-screen">
    <div className="absolute inset-0 bg-hero-gradient" />
      <img src={rectangle1} alt="Imagen de fondo" className="inset-0 w-full h-full object-cover object-left" />
    </div>
    <div className="left-10 text-container sm:top-20 sm:left-20 p-4 md:p-10">
      <p className="2k:text-[90px] 4k:text-[110px]">INNOVANDO EN ECONOMÍA CIRCULAR</p>
    </div>
  </section>
)


export default Hero