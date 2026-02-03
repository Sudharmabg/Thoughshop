import './ContentBlock.css'

const ContentBlock = () => {
    const links = [
        { href: '#services', label: 'Explore our services →' },
        { href: '#work', label: 'See our case studies →' },
        { href: '#method', label: 'Discover our methodology →' },
    ]

    return (
        <section id="services" className="relative bg-gray-bg pb-200 s:pb-300 overflow-hidden">
            <div className="site-grid">
                <p className="small-title col-span-6 s:col-span-3 font-medium mb-40 s:mb-0 s:pr-60">
                    Think big with us.
                </p>
                <div className="col-start-1 col-span-6 s:col-start-6 s:col-span-6">
                    <h3 className="h3 mb-50">
                        Great brands are more than famous names, they're Ideas Worth Rallying Around®.
                    </h3>
                    <div className="txt s:pr-100 mb-50">
                        <p>
                            Thoughtshop® partners with innovative companies to create impactful, future-ready brands.
                            We collaborate with visionary teams and design-led companies that require support in
                            company positioning, category definition, and brand expression to unify their team,
                            drive growth, and amplify brand influence in modern culture.
                        </p>
                    </div>
                    <div className="s:pr-100 mb-50">
                        (CHOOSE YOUR PURPOSE)
                    </div>
                    {links.map((link, index) => (
                        <div key={index} className="flex flex-column mt-40">
                            <a href={link.href} className="uline-double">
                                {link.label}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContentBlock
