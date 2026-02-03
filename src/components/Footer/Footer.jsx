import './Footer.css'

const Footer = () => {
    const companyLinks = [
        { href: '/', label: 'Home' },
        { href: '#work', label: 'Case Studies' },
        { href: '#services', label: 'Services' },
        { href: '#method', label: 'Method' },
        { href: '#about', label: 'About' },
        { href: '#blog', label: 'Articles' },
    ]

    const socialLinks = [
        { href: '#', label: 'Instagram' },
        { href: '#', label: 'Twitter' },
        { href: '#', label: 'LinkedIn' },
    ]

    return (
        <footer id="contact" className="footer bg-black overflow-hidden text-white">
            <div className="relative pt-50 s:pt-370 pb-140 s:pb-70">
                <div className="site-max relative pb-170 s:pb-190 flex justify-between items-start">
                    <a href="/" className="inline-flex hidden s:inline-block">
                        <img
                            src="/logo.jfif"
                            alt="Thoughtshop Flag"
                            className="h-140 w-140 -ml-20 -mt-20 object-contain footer__flag"
                        />
                    </a>
                    <a href="/" className="inline-flex">
                        <span className="footer__logo-text text-white text-4xl font-bold">
                            THOUGHTSHOP®
                        </span>
                    </a>
                    <div className="h-[1px] absolute left-0 bottom-0 w-full bg-gray opacity-25 hidden s:block"></div>
                </div>

                <div className="site-grid gap-y-75 s:gap-y-0 s:pt-75 pb-100 s:pb-200">
                    <div className="col-span-3 s:col-span-2">
                        <p className="small-title">Company</p>
                        <ul className="flex flex-col items-start mt-22 text-gray-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-medium leading-[1.6] transition-color duration-300 ease-out hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-3 s:col-span-2">
                        <p className="small-title">Social</p>
                        <ul className="flex flex-col items-start mt-22 text-gray-2">
                            {socialLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-medium leading-[1.6] transition-color duration-300 ease-out hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-6 s:col-span-4">
                        <p className="small-title">Contact</p>
                        <div className="mt-22 text-gray-2">
                            <p className="mb-10">
                                <a
                                    href="mailto:hello@thoughtshop.com"
                                    className="font-medium leading-[1.6] transition-color duration-300 ease-out hover:text-white"
                                >
                                    hello@thoughtshop.com
                                </a>
                            </p>
                            <p className="text-sm opacity-70 mt-40">
                                Ideas Worth Rallying Around®
                            </p>
                        </div>
                    </div>

                    <div className="col-span-6 s:col-span-4">
                        <p className="small-title">Newsletter</p>
                        <form className="mt-22">
                            <div className="flex gap-10">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="footer__input flex-1 bg-transparent border-b border-gray-2 py-10 text-white placeholder:text-gray-2 focus:outline-none focus:border-white transition-colors"
                                />
                                <button
                                    type="submit"
                                    className="footer__submit px-20 py-10 bg-white text-black rounded-full font-medium hover:bg-gray-2 transition-colors"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="site-max pt-50 border-t border-gray-2/25">
                    <div className="flex flex-col s:flex-row justify-between items-start s:items-center text-gray-2 text-sm">
                        <p>© {new Date().getFullYear()} Thoughtshop®. All rights reserved.</p>
                        <div className="flex gap-30 mt-20 s:mt-0">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
