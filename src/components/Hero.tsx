import heroPic from '../assets/banner-stack.png'

const Hero = () => {
    return (
        <section className="container mx-auto px-8 py-20 flex flex-col md:flex-row justify-between items-center gap-10">


            <div className="max-w-xl">
                <h1 className="text-5xl font-bold leading-tight text-slate-900">
                    Build Your Ideal
                    <br />
                    <span className="text-brand-gradient">Development Stack</span>
                </h1>

                <p className="mt-5 text-base leading-6 text-slate-500 max-w-lg">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <div className="flex gap-3 mt-8">
                    <button className="brand-gradient rounded-md px-4 py-2 text-sm font-medium text-white">
                        Explore Technologies
                    </button>
                    <button className="rounded-md border border-slate-200 px-6 py-2 text-sm text-slate-600">
                        Learn More
                    </button>
                </div>
            </div>



            <div>
                <img className="w-102" src={heroPic} alt=""/>
            </div>

        </section>
    )
}

export default Hero