import { useState, useRef, useEffect } from 'react'
import { close, logo, menu } from '../assets/'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, settoggle] = useState(null);
    const menuRef = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
                settoggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className='w-full h-full flex py-4 justify-between items-center navbar'>
            <a href="/">
                <img src={logo} alt='hoobank' className='w-[60px] 2k:w-[80px] mr-20 animate__animated animate__fadeIn' />
            </a>
            <ul className='list-none animate__animated animate__fadeIn md:flex hidden justify-between items-center flex-1'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                        font-semibold cursor-pointer
                        text-[20px] 2k:text-[30px] 4k:text-[35px] text-white text-nav`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li
                    className={`font-poppins
                    font-semibold cursor-pointer
                    text-[20px] 2k:text-[30px] 4k:text-[35px] text-white text-nav`}
                >
                    <a href='https://app.hoobank.com/login'>
                        Iniciar Sesión
                    </a>
                </li>
            </ul>
            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    ref={buttonRef}
                    className='w-[28px] h-[28px] object-contain animate__animated animate__fadeIn'
                    onClick={() => settoggle((prev) => prev === null || prev === false ? true : false)}
                />
                <div ref={menuRef} className={`${toggle === null ? 'hidden' : (toggle ? 'fadeIn' : 'hidden')} p-6 bg-navbar-gradient absolute top-20 right-0 my-2 w-full sidebar z-50`}>
                    {/* Agregado z-50 para incrementar el z-index */}
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li
                                key={nav.id}
                                className={`font-poppins
                                font-normal cursor-pointer
                                text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}
                            >
                                <a href={`#${nav.id}`}>
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
