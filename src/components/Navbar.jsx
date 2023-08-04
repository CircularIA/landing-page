import { useState } from 'react'
import { close, logo, menu } from '../assets/'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <a href="/">
                <img src={logo} alt='hoobank' className='w-[80px] mr-20' /> 
            </a>
            <ul className='list-none sm:flex hidden justify-between items-center flex-1'>
                {navLinks.map((nav) => (
                    <li
                        key={nav.id}
                        className={`font-poppins
                        font-semibold cursor-pointer
                        text-[20px] text-white`}
                    >
                        <a href={`#${nav.id}`}>
                            {nav.title}
                        </a>
                    </li>
                ))}
                <li
                    className={`font-poppins
                    font-semibold cursor-pointer
                    text-[20px] text-white`}
                >
                    <a href='https://app.hoobank.com/login'>
                        Iniciar Sesión
                    </a>
                </li>
            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <img src={toggle ? close : menu}
                    alt='menu'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => settoggle((prev) => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-dark-green-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50`}> {/* Agregado z-50 para incrementar el z-index */}
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
