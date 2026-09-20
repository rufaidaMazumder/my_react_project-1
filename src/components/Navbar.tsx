import logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <div className="container mx-auto px-8 h-18 flex justify-between items-center shadow-gray-600">
            <div>
                <a className='flex items-center' href="#">
                    <img src={logo} alt=''></img>
                </a>
            </div>

            <ul className='flex justify-center gap-5'>
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
            <div className='flex justify-center gap-4'>
                <button>Sign In</button>
                <button className='rounded-full bg-btnColor px-5 py-2 text-sm text-white'>Sign Up</button>
            </div>
            
        </div>
    );
};

export default Navbar;