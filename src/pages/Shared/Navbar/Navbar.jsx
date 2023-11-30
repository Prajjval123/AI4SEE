
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";
import logo from './../../../assets/ai4sees-logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-slate-50  '>
            <div className="my-container">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link className='flex gap-4 items-center '>
                                <img src={logo} alt="logo" className='h-10 w-10' />
                                <h3 className="font-bold text-3xl text-[#070F4D]">
                                    AI4SEE
                                </h3>
                            </Link>
                        </div>
                    </div>
                    {/* <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4 font-medium uppercase">
                            <Link className="hover:text-primary duration-300  ">
                                Home
                            </Link>
                        
                            <Link className="hover:text-primary duration-300  ">
                                Services
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                Testimonials
                            </Link>
                            <Link className="hover:text-primary duration-300  ">
                                Contact
                            </Link>
                        </div>
                    </div> */}

                    <div className="hidden md:block">
                        <div className="ml-10 flex space-x-4 font-medium uppercase">
                            <ScrollLink
                                to="home-section"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-primary duration-300"
                            >
                                Home
                            </ScrollLink>
                            <ScrollLink
                                to="services"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-primary duration-300"
                            >
                                Services
                            </ScrollLink>
                            <ScrollLink
                                to="projects"
                                smooth={true}
                                duration={500}
                                className="cursor-pointer hover:text-primary duration-300"
                            >
                                Projects
                            </ScrollLink>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="hover:text-primary focus:outline-none focus:text-primary">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? ' translate-x-0' : ' translate-x-full'} fixed top-0 right-0 h-full bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] w-64 transform transition-all duration-500 ease-in-out font-medium uppercase `}>
                <div className="px-4 py-20 text-center">
                    <button onClick={toggleMenu} className="text-black hover:text-white focus:outline-none focus:text-white absolute top-4 right-4">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <ScrollLink
                        to="home-section"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer block text-white hover:bg-white hover:text-black duration-300 py-2"
                        onClick={toggleMenu}
                    >
                        Home
                    </ScrollLink>
                    <ScrollLink
                        to="services"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer block text-white hover:bg-white hover:text-black duration-300 py-2"
                        onClick={toggleMenu}
                    >
                        Services
                    </ScrollLink>
                    <ScrollLink
                        to="projects"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer block text-white hover:bg-white hover:text-black duration-300 py-2"
                        onClick={toggleMenu}
                    >
                        Projects
                    </ScrollLink>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;