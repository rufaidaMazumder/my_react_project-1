const Footer = () => {
    return (
        <div className="border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col md:flex-row justify-between gap-10">

                <div className="max-w-xs">
                    <p className="text-xl font-bold">
                        Dev <span className="text-brand-gradient">Stack</span>
                    </p>

                    <p className="mt-4 text-sm leading-6 text-slate-500">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>

                    <div className="mt-5 flex gap-4 text-sm text-slate-500">
                        <a href="#">GitHub</a>
                        <a href="#">Twitter</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-800">PRODUCT</p>
                    <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                        <li><a href="">Home</a></li>
                        <li><a href="">Technologies</a></li>
                        <li><a href="">Projects</a></li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-800">COMPANY</p>
                    <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <p className="text-sm font-semibold text-slate-800">LEGAL</p>
                    <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;