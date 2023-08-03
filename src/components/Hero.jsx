import {rectangle1 } from "../assets"

const Hero = () => (
  <section id="home" className="relative">
    <div className="relative w-full h-screen">
    <div className="absolute inset-0 bg-hero-gradient" />
      <img src={rectangle1} alt="Imagen de fondo" className="inset-0 w-full h-full object-cover object-left" />
    </div>
    <div className="text-container top-20 left-20 p-4 md:p-10">
      <p>INNOVANDO EN ECONOMÍA CIRCULAR</p>
    </div>
  </section>
)


export default Hero