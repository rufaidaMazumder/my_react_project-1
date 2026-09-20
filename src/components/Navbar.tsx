import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo-text.png'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-8 h-18 flex justify-between items-center">

                <button className='md:hidden text-2xl' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </button>

                <a className='flex items-center' href="#">
                    <img src={logo} alt=''></img>
                </a>

                <ul className='hidden md:flex justify-center gap-5'>
                    <li>
                        <a className='text-btnColor' href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Technologies</a>
                    </li>
                    <li>
                        <a href=''>Projects</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>

                <div className='hidden md:flex justify-center gap-4'>
                    <button>Sign In</button>
                    <button className='rounded-full bg-btnColor px-5 py-2 text-sm text-white'>Sign Up</button>
                </div>

                <div className='flex md:hidden justify-center gap-2'>
                    <button className='text-sm'>Sign In</button>
                    <button className='rounded-full bg-btnColor px-4 py-1.5 text-sm text-white'>Sign Up</button>
                </div>

            </div>

            {isMenuOpen && (
                <ul className='md:hidden flex flex-col gap-4 px-8 py-4 border-t border-slate-100'>
                    <li>
                        <a className='text-btnColor' href=''>Home</a>
                    </li>
                    <li>
                        <a href=''>Technologies</a>
                    </li>
                    <li>
                        <a href=''>Projects</a>
                    </li>
                    <li>
                        <a href=''>About</a>
                    </li>
                    <li>
                        <a href=''>Contact</a>
                    </li>
                </ul>
            )}

        </div>
    );
};

export default Navbar;