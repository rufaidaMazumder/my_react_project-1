import heroPic from '../assets/banner-stack.png'
const Hero = () => {
    return (
         <section className="container mx-auto px-8 flex justify-between items-center">{  }
            <div>
                <h1>Build Your Ideal</h1>
                <h1>Development Stack</h1>
                <p>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
            </div>
            <div>
                <a className='flex items-center' href="#">
                    <img src={heroPic} alt=''></img>
                </a>
            </div>
        </section>
        
    );
};

export default Hero;